<template>
<div class="content-box">
  <div class="container">
    <p>主体页面 1 - 4 </p>
    <div class="test-div">
      <span>自定义初始值 {{ value }}</span>
      <el-slider v-model="value" style="width:50%;"></el-slider>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      value: 25
    }
  }
}
</script>