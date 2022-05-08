<template>
  <div>
    <el-card>
      <div slot="header">
        <Icon type="md-aperture" size="30" color="#2e71ea"/><span class="clearfix">今日头条</span>
        <Dropdown style="margin-left:50px;">
          <a href="javascript:void(0)">
            <span>切换媒体</span><Icon size="20" type="ios-arrow-down" />
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>今日头条</DropdownItem>
            <DropdownItem>广点通</DropdownItem>
            <DropdownItem>快手</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Form ref="searchForm" :model="searchForm" inline class="search-form">
          <FormItem prop="date">
            <span>日期</span>
            <el-select v-model="searchForm.date" filterable placeholder="请选择日期">
              <el-option v-for="(item, index) in dateSelectList" :key="index" :value="item">{{ item }}</el-option>
            </el-select>
          </FormItem>
        </Form>
        
        <el-button class="programmaticBatchBtn">
          <img src="@/assets/img/mg-icon-intelligence.gif"/>程序化批量
        </el-button>
        <el-button type="primary" icon="el-icon-plus" style="float:right;" size="small">新建广告计划</el-button>
      </div>

      <el-row :gutter="35" style="margin:0 auto; margin-bottom:20px;">
        <el-col :span="6">
          <el-card shadow="never" style="border-top: 4px solid rgb(58, 160, 255);">
            <div class="colorCardsBody">
              <span>投放中计划<i class="el-icon-d-arrow-right"></i></span>
              <p>0</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" style="border-top: 4px solid red;">
            <div class="colorCardsBody">
              <span>审核不通过计划<i class="el-icon-d-arrow-right"></i></span>
              <p>0</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" style="border-top: 4px solid rgb(250, 211, 55);">
            <div class="colorCardsBody">
              <span>预算不足计划<i class="el-icon-d-arrow-right"></i></span>
              <p>0</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="never" style="border-top: 4px solid rgb(78, 203, 115);">
            <div class="colorCardsBody">
              <span>托管中计划<i class="el-icon-d-arrow-right"></i></span>
              <p>0</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="35" style="margin:0 auto; margin-bottom:20px;">
        <el-col :span="24">
          <div style="padding:28px 40px 0 40px;" class="dataOverview">
            <div class="overview-list-item">
              <p class="overview-list-text">总消耗</p>
              <p class="overview-list-count">28871.28</p>
              <p :class="setColor(-57.52)">-57.52%</p>
            </div>
            <div class="overview-list-item">
              <p class="overview-list-text">激活数</p>
              <p class="overview-list-count">194</p>
              <p :class="setColor(-71.00)">-71.00%</p>
            </div>
            <div class="overview-list-item">
              <p class="overview-list-text">激活成本</p>
              <p class="overview-list-count">148.82</p>
              <p :class="setColor(46.49)">46.49%</p>
            </div>
            <div class="overview-list-item">
              <p class="overview-list-text">注册数</p>
              <p class="overview-list-count">147</p>
              <p :class="setColor(-75.34)">-75.34%</p>
            </div>
            <div class="overview-list-item">
              <p class="overview-list-text">注册成本</p>
              <p class="overview-list-count">196.4</p>
              <p :class="setColor(72.22)">72.22%</p>
            </div>
            <div class="overview-list-item">
              <p class="overview-list-text">付费数</p>
              <p class="overview-list-count">23</p>
              <p :class="setColor(-55.77)">-55.77%</p>
            </div>
            <div class="overview-list-item">
              <p class="overview-list-text">付费成本</p>
              <p class="overview-list-count">1255.27</p>
              <p :class="setColor(-3.96)">-3.96%</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card style="margin-top:30px;">
      <div slot="header">
        <span class="clearfix">效果总览</span>
        <Form ref="searchForm" :model="searchForm" inline class="search-form-2">
          <el-row :gutter="50">
            <el-col :span="6">
              <FormItem prop="mediaAccount">
                <span>媒体账号</span>
                <el-select v-model="searchForm.mediaAccount" filterable placeholder="请选择媒体账号">
                  <el-option value="全部媒体账号">全部媒体账号</el-option>
                  <el-option v-for="(item, index) in mediaAccountList" :key="index" :value="item">{{ item }}</el-option>
                </el-select>
              </FormItem>
            </el-col>

            <el-col :span="6">
              <FormItem prop="application">
                <span>应用</span>
                <el-select v-model="searchForm.application" filterable placeholder="请选择应用">
                  <el-option v-for="(item, index) in applicationList" :key="index" :value="item">{{ item }}</el-option>
                </el-select>
              </FormItem>
            </el-col>

            <el-col :span="6">
              <FormItem FormItem prop="mediaType">
                <span>媒体</span>
                <el-select v-model="searchForm.mediaType" filterable placeholder="请选择媒体">
                  <el-option v-for="(item, index) in mediaTypeList" :key="index" :value="item">{{ item }}</el-option>
                </el-select>
              </FormItem>
            </el-col>

            <el-col :span="6">
              <FormItem prop="date2">
                <span>日期</span>
                <el-select v-model="searchForm.date2" filterable placeholder="请选择日期">
                  <el-option v-for="(item, index) in dateSelectList" :key="index" :value="item">{{ item }}</el-option>
                </el-select>
              </FormItem>
            </el-col>
          </el-row>
        </Form>
      </div>
      <div>
        <LineECharts></LineECharts>
      </div>
    </el-card>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card style="margin-top:30px;">
          <div slot="header">
            <span class="clearfix">TOP广告</span>

            <Form ref="searchFormTop" :model="searchFormTop" inline class="search-form-2">
              <el-row :gutter="10">
                <el-col :span="8">
                  <FormItem prop="applicationTop">
                    <el-select v-model="searchFormTop.applicationTop" filterable placeholder="请选择应用">
                      <el-option value="全部应用">全部应用</el-option>  
                      <el-option v-for="(item, index) in applicationList" :key="index" :value="item">{{ item }}</el-option>
                    </el-select>
                  </FormItem>
                </el-col>

                <el-col :span="8">
                  <FormItem prop="mediaTypeTop">
                    <el-select v-model="searchFormTop.mediaTypeTop" filterable placeholder="请选择媒体">
                      <el-option v-for="(item, index) in mediaTypeList" :key="index" :value="item">{{ item }}</el-option>
                    </el-select>
                  </FormItem>
                </el-col>

                <el-col :span="8">
                  <FormItem prop="dateTop">
                    <el-select v-model="searchFormTop.dateTop" filterable placeholder="请选择日期">
                      <el-option v-for="(item, index) in dateSelectList" :key="index" :value="item">{{ item }}</el-option>
                    </el-select>
                  </FormItem>
                </el-col>
              </el-row>
            </Form>
          </div>
          <div>
            <el-table :data="tableDataTopAd" border>
              <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
              <el-table-column 
                  v-for="(item, index) in columnTopAd" :key="index"
                  :prop="item.prop" :label="item.label" 
                  align="center" :width="item.width ? item.width : ''"
                  :show-overflow-tooltip="item.prop == 'remark' ? true : false">
                  <template slot-scope="scope">
                      <span v-if="item.isSlot">
                          <span v-if="item.prop == 'planName'">
                              <el-tag type="success">{{ scope.row[item.prop] }}</el-tag>
                          </span>
                      </span>
                      <span v-else>{{ scope.row[item.prop] }}</span>
                  </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                      <el-button type="text" size="small" @click="handleUpdate(scope.row, 1)"> 编辑 1 </el-button>
                      <el-button type="text" size="small" @click="handleDelete(scope.row, 1)"> 删除 1 </el-button>
                  </template>
              </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <Pagination
              :total="totalOne"
              :page.sync="pageIndexOne"
              :limit.sync="pageSizeOne"
              @pagination="getTableDataOne"
            ></Pagination>
            <div slot="footer" style="float:right; margin:10px 10px;">
              <el-button type="text" size="20">查看详情<i class="el-icon-d-arrow-right"></i></el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card style="margin-top:30px;">
          <div slot="header">
            <span class="clearfix">TOP创意</span>
            <Form ref="searchFormTop" :model="searchFormTop" inline class="search-form-2">
              <el-row :gutter="10">
                <el-col :span="8">
                  <FormItem prop="applicationTop2">
                    <el-select v-model="searchFormTop.applicationTop2" filterable placeholder="请选择应用">
                      <el-option value="全部应用">全部应用</el-option>  
                      <el-option v-for="(item, index) in applicationList" :key="index" :value="item">{{ item }}</el-option>
                    </el-select>
                  </FormItem>
                </el-col>

                <el-col :span="8">
                  <FormItem prop="mediaTypeTop2">
                    <el-select v-model="searchFormTop.mediaTypeTop2" filterable placeholder="请选择媒体">
                      <el-option v-for="(item, index) in mediaTypeList" :key="index" :value="item">{{ item }}</el-option>
                    </el-select>
                  </FormItem>
                </el-col>

                <el-col :span="8">
                  <FormItem prop="dateTop2">
                    <el-select v-model="searchFormTop.dateTop2" filterable placeholder="请选择日期">
                      <el-option v-for="(item, index) in dateSelectList" :key="index" :value="item">{{ item }}</el-option>
                    </el-select>
                  </FormItem>
                </el-col>
              </el-row>
            </Form>
          </div>
          <div>
            <el-table :data="tableDataTopIdea" border>
              <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
              <el-table-column 
                  v-for="(item, index) in columnTopIdea" :key="index"
                  :prop="item.prop" :label="item.label" 
                  align="center" :width="item.width ? item.width : ''"
                  :show-overflow-tooltip="item.prop == 'remark' ? true : false">
                  <template slot-scope="scope">
                      <span v-if="item.isSlot">
                          <span v-if="item.prop == 'planName'">
                              <el-tag type="success">{{ scope.row[item.prop] }}</el-tag>
                          </span>
                      </span>
                      <span v-else>{{ scope.row[item.prop] }}</span>
                  </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                      <el-button type="text" size="small" @click="handleUpdate(scope.row, 2)"> 编辑 2 </el-button>
                      <el-button type="text" size="small" @click="handleDelete(scope.row, 2)"> 删除 2 </el-button>
                  </template>
              </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <Pagination
              :total="totalTwo"
              :page.sync="pageIndexTwo"
              :limit.sync="pageSizeTwo"
              @pagination="getTableDataTwo"
            ></Pagination>
            <div class="blankContent"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination';
import LineECharts from '@/components/home/LineECharts';

export default {
  name: 'Home',  // 首页
  data(){
    return{
      name: localStorage.getItem('ms_username'),
      dateSelectList: ['今天','昨天','过去7天','过去30天','本周','上周','本月','上月'],  // 可选日期列表
      mediaAccountList: ['媒体账号1','媒体账号2','媒体账号3','媒体账号4'],  // 媒体账号列表
      applicationList: ['应用1','应用2','应用3','应用4','应用5'],  // 应用列表
      mediaTypeList: ['今日头条','广点通','快手'],  // 媒体类型列表
      
      searchForm:{  // 今日头条和效果总览的查询参数
        date: "",
        date2: "",
        mediaAccount: "",
        application: "",
        mediaType: ""
      },
      searchFormTop:{  // TOP广告和TOP创意的查询参数
        applicationTop: "",  // TOP广告
        mediaTypeTop: "",
        dateTop: "",
        applicationTop2: "",  // TOP创意
        mediaTypeTop2: "",
        dateTop2: "",
      },
      columnTopAd: [  // TOP广告的表格表头列
        { label: '计划名称', prop: 'planName', isSlot: true},
        { label: '消耗', prop: 'expend'},
        { label: '消耗变化率', prop: 'expendRate'},
        { label: '转化数', prop: 'TransformNumber'},
        { label: '转化率', prop: 'TransformRate'},
      ],
      tableDataTopAd: [],  // TOP广告的表格数据

      columnTopIdea: [  // TOP创意的表格表头列
          
      ],
      tableDataTopIdea: [],  // TOP创意的表格数据
      totalOne: 0,  // TOP广告的分页
      pageIndexOne: 1,
      pageSizeOne: 20,

      totalTwo: 0,  // TOP创意的分页
      pageIndexTwo: 1,
      pageSizeTwo: 20,
    }
  },
  components: {
    Pagination,
    LineECharts
  },
  created() {
    
  },
  methods: {
    setColor(dataVal){
      if(dataVal > 0){
        return 'overview-list-trend-up';
      }else{
        return 'overview-list-trend-down';
      }
    },
    getTableDataOne(){
      console.log('TOP广告的分页触发');
    },
    getTableDataTwo(){
      console.log('TOP创意的分页触发');
    },
    handleUpdate(row, type){
      if(type == 1){  // TOP广告表格编辑

      }else{  // TOP创意表格编辑

      }
    },
    handleDelete(row, type){
      if(type == 1){  // TOP广告表格数据删除

      }else{  // TOP创意表格数据删除

      }
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

/* 卡片标题字体的样式 */
.clearfix{
  padding-left: 5px;
  font-size: 22px;
  font-weight: bold;
}
/* 四个彩色卡片的相关样式 */
.colorCardsBody{
  padding: 18px 40px;
}
.colorCardsBody span{
  font-size: 16px;
  color: #515a6e;
}
.colorCardsBody p{
  font-family: Roboto-Medium !important;
  padding-top: 15px;
  font-size: 18px;
  font-weight: 800;
}
/* 数据总览区域的整体样式设置 */
.dataOverview{
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 数据总览里的每一条信息项 */
.overview-list-item {
  padding: 0 25px;
  border-left: 1px solid rgba(220,222,226,.5);
  flex: 1;
}
.overview-list-item:first-child {
  border: none;
}
/* 数据总览里每条信息项的文本部分 */
.overview-list-text {
  color: #515a6e;
  font-size: 14px;
  margin-bottom: 24px;
}
.overview-list-count {
  color: #17233d;
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 16px;
}
.overview-list-trend-up {
  font-size: 14px;
  color: blue;
}
.overview-list-trend-down {
  font-size: 14px;
  color: red;
}
.programmaticBatchBtn{  /* 程序化批量的按钮样式 */
  float: right;
  padding: 4px 11px 3px 11px;
  margin-left: 20px;
  margin-right: 50px;
  font-size: 14px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 182, 151);
}
.programmaticBatchBtn img{  /* 程序化批量按钮上的动图标 */
  width: 24px;
  display: inline-block;
  vertical-align: middle;  /* 让该图标在 Y 轴上居中 */
}
.search-form{  /* 日期筛选控件的样式 */
  display: inline;
  margin-left: 20px;
  margin-right: 8px;
  float: right;
}
.search-form span,.search-form-2 span{  /* 筛选控件的前面字体样式 */
  margin-right: 10px;
  font-weight: bold;
}
.search-form-2{  /* “效果总览” 卡片里的筛选控件定位设置 */
  margin-top:30px;
  margin-bottom: -40px;
  margin-left: 30px;
}
.blankContent{  /* TOP 创意卡片底部空白部分，为了和 TOP 广告底部对齐 */
  width: auto;
  height: 40px;
}
</style>
