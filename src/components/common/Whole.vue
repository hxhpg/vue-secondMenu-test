<template>
  <div class="wrapper">
    <!-- 页面头部部分 -->
    <div class="header">
      <div class="logo">后台管理系统</div>
      <!-- 水平一级菜单 -->
      <div style="float:left;">
        <el-menu 
          mode="horizontal"
          text-color="#000000"
          active-text-color="#3989fa"
          :default-active="toIndex" 
          @select="handleSelect">
          <el-menu-item v-for="(item, index) in itemList" :index="item.path" :key="index">
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </div>
      
      <div class="header-right">
        <div class="header-user-con">
          <!-- 切换主题 -->
          <div @click="handleChangeStyle()">
            <el-tooltip content="切换主题" placement="bottom">
              <i :class="globalTheme ? 'el-icon-moon' : 'el-icon-sunny'"></i>
            </el-tooltip>
          </div>
          <!-- 用户头像 -->
          <div class="user-avator">
            <img src="@/assets/img/img.jpg"/>
          </div>
          <!-- 用户名下拉菜单 -->
          <el-dropdown class="user-name" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link"> {{ username }} <i class="el-icon-caret-bottom"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>修改密码</el-dropdown-item>
              <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>

    <!-- 页面左侧二级菜单栏，和主体内容区域部分 -->
    <el-main>
      <router-view></router-view>
    </el-main>

  </div>
</template>

<script>
import bus from "@/utils/bus";
export default {
  data(){
    return{
      itemList: [    // 水平一级菜单栏的菜单
        { path: '/Home', title: '首页' },
        { path: '/test1', title: '一级菜单1' },
        { path: '/test2', title: '一级菜单2' },
        { path: '/test3', title: '一级菜单3' },
        { path: '/permission', title: '管理员权限' },
        // { path: '/i18n', title: '国际化组件' }
      ],
      globalTheme: false,
    }
  },
  computed: {
    username(){
      return localStorage.getItem('ms_username') || '';
    },
    toIndex(){  // 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
      return '/' + this.$route.path.split('/')[1];
    },
  },
  created() {
    this.globalTheme = JSON.parse(localStorage.getItem('global_theme'));
    bus.$emit('global_theme', this.globalTheme);  // 将 globalTheme 的值传给父组件
  },
  methods: {
    handleSelect(path){  // 切换菜单栏
      this.$router.push({
        path: path
      });
    },
    handleCommand(command){  // 用户名下拉菜单选择事件
      if(command == 'loginout'){
        localStorage.removeItem('ms_username');
        this.$router.push({
            path: '/Login'
        });
      }
    },
    handleChangeStyle(){  // 切换主题
      this.globalTheme = !this.globalTheme;
      localStorage.setItem('global_theme', this.globalTheme);  // 本地存储选择的 globalTheme
      bus.$emit('global_theme', this.globalTheme);  // 将 globalTheme 的值传给父组件
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
}
.header .logo {
  float: left;
  margin-left: 60px;
  margin-top: 17.5px;
  height: 29px;
  width: 160px;
  vertical-align: middle;
}
/* --------------- 用户头像区域的样式 ---------------- */
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-name {
  margin-left: 10px;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
/* --------------- 水平一级菜单栏的样式--------------------- */
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
  float: left;
  margin-left: 50px;
  background: transparent;
}
.el-menu--horizontal > .el-menu-item.is-active {
  /* border-bottom: 2px solid #3989fa;
  color: #3989fa; */
  font-weight: bold;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 16px;
  margin: 0 15px;
}
</style>