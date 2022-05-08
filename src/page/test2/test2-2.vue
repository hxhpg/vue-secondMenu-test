<template>
<div class="content-box">
  <div class="container">
    <p>主体页面 2 - 2 </p>

    <div class="table-container">
      <el-table ref="Table2"
                :data="list"
                style="width: 100%;"
                show-overflow-tooltip="true"
                @selection-change="handleSelectionChange"
                border>
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
        <el-table-column label="人员ID" align="center">
          <template slot-scope="scope">{{scope.row.PersonID}}</template>
        </el-table-column>
        <el-table-column label="人员姓名" align="center">
          <template slot-scope="scope">{{scope.row.FullName}}</template>
        </el-table-column>
        <el-table-column label="学历" align="center">
          <template slot-scope="scope">{{scope.row.Degree}}</template>
        </el-table-column>
        <el-table-column label="毕业院校" align="center">
          <template slot-scope="scope">{{scope.row.University}}</template>
        </el-table-column>
        <el-table-column label="专业" align="center">
          <template slot-scope="scope">{{scope.row.Major}}</template>
        </el-table-column>
        <el-table-column label="入校时间" align="center">
          <template slot-scope="scope">{{scope.row.AdmissionTime}}</template>
        </el-table-column>
        <el-table-column label="毕业时间" align="center">
          <template slot-scope="scope">{{scope.row.GraduationTime}}</template>
        </el-table-column>
        <el-table-column label="截止日期" align="center">
          <template slot-scope="scope">{{scope.row.EndDate}}</template>
        </el-table-column>
        <el-table-column label="操作" width="120" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" 
                       @click="handleUpdate(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页组件 -->
    <Pagination
      :total="total"
      :page.sync="listQuery.pageNum"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
    ></Pagination>

  </div>
</div>
</template>

<script>
import Pagination from '@/components/common/Pagination';
import { testApi } from '@/api/test';

const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  keyword: ""
};

export default {
  data(){
    return{
      listQuery: Object.assign({}, defaultListQuery),
      list: [],
      total: 0,
      listLoading: true,
      selectedList: [],
    }
  },
  components: {
    Pagination
  },
  created() {
    this.getList();
  },
  methods:{
    getList() {    // 获取数据列表
      this.listLoading = true;
      testApi(this.listQuery).then(res => {
        this.listLoading = false;
        this.list = res.data.list;
        this.total = res.data.total;
      });
    },
    handleSelectionChange(val){    // 批量选择行数
      this.selectedList = val;
    },
  }
}
</script>
