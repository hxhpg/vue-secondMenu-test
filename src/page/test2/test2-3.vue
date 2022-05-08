<template>
<div class="content-box">
  <div class="container">
    <p>主体页面 2 - 3 </p>
    <div class="test-div" style="width:400px;">
      <el-carousel height="150px" class="customize-carousel">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
}
</script>

<style lang="scss">
.customize-carousel .el-carousel__item h3 {
  color: #475669;
  font-size: 16px;
  line-height: 150px;
  margin: 0 50%;
}
.customize-carousel .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.customize-carousel .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>