<template>
<div class="content-box">
  <div class="container">
    <p>主题页面 3 - 2</p>
    <div class="test-div">
      <el-alert
        title="成功提示的文案"
        type="success"
        :closable="false"
        center
        show-icon>
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info"
        show-icon>
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning"
        close-text="好的">
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>