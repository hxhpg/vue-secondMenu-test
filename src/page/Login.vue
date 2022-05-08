<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">欢迎登录</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="输入账号">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-top: 25px">
          <el-input type="password" placeholder="登录密码" v-model="param.password" @keyup.enter.native="submitForm()">
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <span>注：账号密码随便填写（ admin 是管理员，其他为普通用户）</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginApi } from '@/api/login';

export default {
  name: 'Login',  // 登录页面
  data(){
    return{
      param: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getType();
  },
  methods: {
    getType() {
      let datas = {
        telephone: '13088888888',
        typeCode: 2
      };
      loginApi(datas).then((res) => {
        console.log('c', res);
      });
    },
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message.success('登录成功');
          localStorage.setItem('ms_username', this.param.username);
          this.$router.push('/');
        } else {
          this.$message.error('请输入账号和密码');
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/img/newlogin-bg.jpg');
}
.ms-title {
  width: 100%;
  text-align: center;
  font-size: 22px;
  margin: 25px 0px 15px;
}
.ms-login {
  position: relative;
  width: 450px;
  height: 335px;
  max-width: 90%;
  margin: 275px auto;
  border-radius: 5px;
  background: white;
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  margin-top: 10%;
}
.login-btn button {
  width: 100%;
  height: 36px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
