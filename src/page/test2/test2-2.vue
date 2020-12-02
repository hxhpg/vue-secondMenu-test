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

    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[10,20,50]"
        :total="total">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  keyword: ""
};

export default {
  data(){
    return{
      listQuery: Object.assign({}, defaultListQuery),
      list: null,
      total: null,
      listLoading: true,
      selectedList: [],
    }
  },
  created() {
    this.getList();
  },
  methods:{
    handleResetSearch() {   // 重置搜索和列表
      this.listQuery = Object.assign({}, defaultListQuery);  // 清空输入框内容
      this.getList();  // 刷新列表并初始化
    },
    handleSearchList() {  // 查询搜索
      this.listQuery.pageNum = 1;
      this.getList();
    },
    handleSizeChange(val) {  // 改变列表显示条数
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {  // 改变列表显示页数
      this.listQuery.pageNum = val;
      this.getList();
    },

    getList() {    // 获取数据列表
      this.listLoading = true;
      this.$api.test.testApi(this.listQuery).then(res => {
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

<style>
</style>