<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{isLogin ? "登录" : "注册"}}</h1>
            <p class="text-xs-center">
                <nuxt-link to="/register" v-if="isLogin">有账号吗?</nuxt-link>
                <nuxt-link to="/login" v-if="!isLogin">去登陆</nuxt-link>
            </p> 

            <ul class="error-messages">
              <!-- template 不会生成额外的dom节点 -->
              <template v-for="(messages,field) in errors"> 
                <li 
                  v-for="(message,index) in messages"
                  :key="index"
                  >{{ field }} {{message}}</li>
              </template>
            </ul>

            <form @submit.prevent="onSubmit">
              <fieldset class="form-group" v-if="!isLogin">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="请输入名称"
                  v-model="user.username"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="请输入邮箱"
                  v-model="user.email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="请输入密码"
                  v-model="user.password"
                  minlength="8"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                {{isLogin ? "登录" : "注册"}}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login ,register} from "@/api/user"
// 仅在客户端加载js-cookie包
const Cookie = process.client ? require('js-cookie') :undefined
export default {
  middleware:'notauthenticated',
  name: "LoginIndex",
  computed:{
      isLogin(){
          return this.$route.name ==='login'
      }
  },
  data() {
    return {
      user:{
        username:'',
        email:'',
        password:''
      },
      errors:{
      } //错误信息
    }
  },
  methods: {
    async onSubmit(){
      // 提交表单登录
      try {
        const { data } = this.isLogin
        ? await login({
          user:this.user
        }):
        await register({
          user:this.user
        })
      // 登陆成功之后保存登陆状态相关数据
      
      // 存储密码 设置页面需要
      data.user.password=this.user.password
      // 本地存储
      this.$store.commit('setUser',data.user)
      // 防止页面刷新数据丢失我们需要将数据持久化
      Cookie.set('user',data.user)
       // 跳转到首页

      this.$router.push('/')
      } catch (error) {
        this.errors = error.response.data.errors
      }
      

     
    }
  },
};
</script>

<style lang="scss" scoped>
</style>