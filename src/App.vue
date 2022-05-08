<template>
  <div id="app" :class="style ? 'theme1' : ''">
    <router-view></router-view>
  </div>
</template>

<script>
import bus from '@/utils/bus';

export default {
  data(){
    return{
      style: false
    }
  },
  created(){
    bus.$on('global_theme', (msg) => {    // 接收子组件传来 global_theme 的值
      this.style = msg;
    });
  }
}
</script>
