exports.ids = [5];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updataUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 更新用户信息

const updataUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=2d411964&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"auth-page\" data-v-2d411964>","</div>",[_vm._ssrNode("<div class=\"container page\" data-v-2d411964>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2d411964>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-2d411964>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-2d411964>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "登录" : "注册"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-2d411964>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("有账号吗?")]):_vm._e(),_vm._ssrNode(" "),(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("去登陆")]):_vm._e()],2),_vm._ssrNode(" <ul class=\"error-messages\" data-v-2d411964>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-2d411964>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-2d411964>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-2d411964><input type=\"text\" placeholder=\"请输入名称\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-2d411964></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-2d411964><input type=\"email\" placeholder=\"请输入邮箱\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-2d411964></fieldset> <fieldset class=\"form-group\" data-v-2d411964><input type=\"password\" placeholder=\"请输入密码\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-2d411964></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-2d411964>"+_vm._ssrEscape("\n              "+_vm._s(_vm.isLogin ? "登录" : "注册")+"\n            ")+"</button></form>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=2d411964&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 仅在客户端加载js-cookie包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notauthenticated',
  name: "LoginIndex",
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {} //错误信息

    };
  },

  methods: {
    async onSubmit() {
      // 提交表单登录
      try {
        const {
          data
        } = this.isLogin ? await Object(user["a" /* login */])({
          user: this.user
        }) : await Object(user["b" /* register */])({
          user: this.user
        }); // 登陆成功之后保存登陆状态相关数据
        // 存储密码 设置页面需要

        data.user.password = this.user.password; // 本地存储

        this.$store.commit('setUser', data.user); // 防止页面刷新数据丢失我们需要将数据持久化

        Cookie.set('user', data.user); // 跳转到首页

        this.$router.push('/');
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2d411964",
  "226e2ceb"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map