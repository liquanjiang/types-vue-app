<template>
  <div class="login">
    <div @click="jump()" class="login-href"><a>点击这里跳往主页</a></div>
    <div @click="login()" class="login-href"><a>点击这里登录设置token</a></div>
    <div @click="logout()" class="login-href"><a>点击这里退出清空token</a></div>
    <div @click="$open('https://baidu.com')" class="login-href"><a>点击这里跳往百度</a></div>
  </div>
</template>

<script>
// 引入util工作
import util from '../../libs/util.ts'
import {Vue} from 'vue-property-decorator';
export default Vue.extend({
  name: 'login',
  methods: {
    jump () {
      this.$router.push('/home')
    },
    login () {
      util.cookies.set('token', '123')
      const cookie = util.cookies.get('token')
      console.log(cookie)
    },
    logout () {
      util.cookies.remove('token')
    },
    jumpout () {
    }
  }
})
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
  }

  .login-href {
    width: 150px;
    height: 50px;
    margin: 20px 20px;
    background: #fff;
    cursor: pointer;
    border-radius:5px;
    display:inline-block;
    line-height:50px;
  }
</style>
