<template>
<div>
    <el-aside>
        <SideMenu :items='items'></SideMenu>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
</div>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
    components:{
        SideMenu
    },
    data(){
        return {
            items: [
                {
                    index: 'test2-1',
                    title: '二级菜单2-1'
                },
                {
                    index: 'test2-2',
                    title: '二级菜单2-2'
                },
                {
                    index: 'test2-3',
                    title: '二级菜单2-3'
                },
        ],
        }
    },
}
</script>

<style scoped>
</style>