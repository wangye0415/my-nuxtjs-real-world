<template>
  <div>
    <div class="settings-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>
            <form @submit.prevent="upData">
              <fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    v-model="user.image"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    v-model="user.username"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    v-model="user.bio"
                  ></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    v-model="user.email"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    v-model="user.password"
                  />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right" :disabled="!couldSubmit">
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button class="btn btn-outline-danger" @click="logout">
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updataUser } from "@/api/user";
import { mapState } from "vuex";

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  name: "SettingsIndex",
  data() {
    return {
      couldSubmit:true
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
   async logout() {
      // 清除user内存储的内容 模拟退出登录
      this.$store.commit("setUser", null);
      Cookie.set('user',null)
      // 返回home页面
      this.$router.push('/home')
    },
   async upData() {
     this.couldSubmit=false
    //  this.userInfo.username=user.username
     const PostData = Object.assign({},{
       username:this.user.username,
       password:this.user.password,
       email:this.user.email,
       bio:this.user.bio,
       image:this.user.image
       })
     const {data} = await updataUser({user:PostData})
     this.couldSubmit=true
     this.$router.push(`/profile/${this.user.username}`)
    },
  },
};
</script>

<style scoped>
</style>