<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar">
        <el-avatar :size="80" :src="avatar"></el-avatar>
      </div>

      <div class="login-title">
        <h1>用户登录</h1>
        <hr/>
        <div>User Login</div>
      </div>

      <div class="form">
        <el-form :model="loginParam" :rules="rules">
          <el-form-item prop="username">
            <el-input prefix-icon="User" clearable class="username" type="text" v-model="loginParam.username"
                      placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="Lock" class="password" type="password" show-password="show-password"
                      v-model="loginParam.password"
                      placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item>
            <div class="remember-me">
              <el-checkbox v-model="loginParam.checked">记住密码</el-checkbox>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="success" @click="doLogin">登录</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";
import useStore from "@/stores";


const {user} = useStore();
const router = useRouter()
const loginParam = reactive({
  username: 'admin',
  password: '123456789',
  checked: true
})
const rules = {
  username: [
    {require: true, message: '用户名不能为空', trigger: 'blur'},
    {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
  ],
  password: [
    {require: true, message: '密码不能为空', trigger: 'blur'},
    {min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur'},
  ]
}
const avatar = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages4.10qianwan.com%2F10qianwan%2F20190608%2Fb_0_201906080345398746.jpg&refer=http%3A%2F%2Fimages4.10qianwan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664267160&t=2c25e9a3e1835b7389b84bf9408e503c';

const doLogin = () => {
  user.login(loginParam)
      .then(resp => {
        router.replace({path: '/'})
      })
}

</script>

<style lang="less" scoped>
.login-container {
  background-color: #3ca993;
  height: 100vh;
  width: 100%;
}

.login-box {
  position: relative;
  width: 300px;
  margin: auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3ca993;
}

.avatar {
  margin-top: 200px;
  margin-bottom: 20px;
}


.login-title {
  text-align: center;
  color: #fff;

  h1 {
    width: 300px;
    line-height: 30px;
  }

  div {
    font-size: 0.7em;
  }
}

.username {
  margin: 20px auto;
}

.password {
  margin-bottom: 20px;
}

.el-input {
  width: 300px;
}

.remember-me {
  width: 300px;
  text-align: left;
  margin-bottom: 30px;
}

.el-button {
  width: 100px;
  background-color: #348c77;
  border: 0;
}

</style>
