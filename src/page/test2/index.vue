<template>
  <div>

    <el-aside>
      <SideMenu :itemList='itemList'></SideMenu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>

  </div>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
  components: {
    SideMenu
  },
  data(){
    return{
      itemList: [
        { path: 'test2-1', title: '二级菜单2-1' },
        { path: 'test2-2', title: '二级菜单2-2' },
        { path: 'test2-3', title: '二级菜单2-3' }
      ]
    }
  },
}
</script>