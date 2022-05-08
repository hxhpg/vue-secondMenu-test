<template>
<div class="content-box">
  <div class="container">
    <p>主体页面 1 - 3 </p>
    <div class="test-div">
      <el-radio-group v-model="radio">
        <el-radio :label="1">选项一</el-radio>
        <el-radio :label="2">选项二</el-radio>
        <el-radio :label="3">选项三</el-radio>
      </el-radio-group>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      radio: 1
    }
  }
}
</script>