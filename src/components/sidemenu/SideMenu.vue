<template>
  <!-- 左侧二级菜单栏的组件封装 -->
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="toIndex"
      background-color="#fff"
      text-color="#000000"
      router>
      <el-menu-item v-for="(item, index) in itemList" :key="index" :index="item.path">
        <!-- 需要图标的在 item 对象中加上属性 icon -->
        <!-- <i :class="item.icon"></i> -->
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {

    }
  },
  computed: {
    toIndex(){  // 根据路径绑定到对应的二级菜单，防止页面刷新重新跳回第一个
      return this.$route.path.split('/')[2];
    }
  },
  methods:{
      
  },
}
</script>

<style lang="scss" scoped>
/* 左侧菜单栏定位和位置大小设定 */
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}

/* 左侧二级菜单项的样式 */
.el-menu-item{
  font-size: 14px !important;
  padding-left: 35px !important;
}

/* 左侧二级菜单选中时的样式 */
.el-menu-item.is-active {
  color: white !important;
  background: #3989fa !important;
}
.el-menu-item, .el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
}
</style>