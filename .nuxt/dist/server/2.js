exports.ids = [2];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return articleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getTags; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共的文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取关注的用户列表

const getFeedArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 删除点赞

const delFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const articleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 新建文章 
// 参数名不能乱用 如果使用params 会将参数拼接到URL后面 导致报错

const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 新增文章评论

const addComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 删除文章评论

const deleteComments = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
}; // 获取标签列表

const getTags = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/tags'
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unFollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取配置信息

const getProfile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
}; // 关注用户

const followUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注用户

const unFollowUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=13ff29c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-page\" data-v-13ff29c8>","</div>",[_vm._ssrNode("<div class=\"banner\" data-v-13ff29c8>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-13ff29c8>","</div>",[_vm._ssrNode("<h1 data-v-13ff29c8>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-13ff29c8>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-13ff29c8><div class=\"col-md-12\" data-v-13ff29c8>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-13ff29c8> "),_vm._ssrNode("<div class=\"article-actions\" data-v-13ff29c8>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-13ff29c8>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-13ff29c8>","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=13ff29c8&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=d8f0d7fe&scoped=true&
var article_metavue_type_template_id_d8f0d7fe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-meta\" data-v-d8f0d7fe>","</div>",[_c('nuxt-link',{attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_c('img',{attrs:{"src":"article.author.image"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-d8f0d7fe>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile',
          params: {
            username: _vm.article.author.username,
          },
        }}},[_vm._v("\n        "+_vm._s(_vm.article.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date\" data-v-d8f0d7fe>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" "),(_vm.user.username !== _vm.article.author.username)?[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.isDeleting))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
          active: _vm.article.author.following,
        }))+" data-v-d8f0d7fe><i class=\"ion-plus-round\" data-v-d8f0d7fe></i>"+_vm._ssrEscape("\n        "+_vm._s(( _vm.article.author.following
            ? "UnFollow  "
            : "Follow  ") + _vm.article.author.username)+"\n        ")+"</button>\n        \n      <button"+(_vm._ssrAttr("disabled",_vm.isFavoriting))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
          active: _vm.article.author.favorited,
        }))+" data-v-d8f0d7fe><i class=\"ion-heart\" data-v-d8f0d7fe></i>"+_vm._ssrEscape("\n         \n        "+_vm._s(_vm.article.favorited ? "Favorite Delete" : "Favorite Post")+"\n        ")+"<span class=\"counter\" data-v-d8f0d7fe>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")]:[_vm._ssrNode("<span class=\"ng-scope\" data-v-d8f0d7fe>","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
            name: 'editor',
            params: {
              slug: _vm.article.slug,
            },
          }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n        ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.isDeleting))+(_vm._ssrClass("btn btn-outline-danger btn-sm",{ disabled: _vm.isDeleting }))+" data-v-d8f0d7fe><i class=\"ion-trash-a\" data-v-d8f0d7fe></i> Delete Article\n        </button>")],2)]],2)])}
var article_metavue_type_template_id_d8f0d7fe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=d8f0d7fe&scoped=true&

// EXTERNAL MODULE: ./api/profiles.js
var profiles = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
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




/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",

  data() {
    return {
      //是否正在删除文章
      isDeleting: false,
      //是否正在设为喜欢、取消喜欢文章
      isFavoriting: false,
      //是否正在关注、取消关注作者
      isFollowing: false
    };
  },

  props: {
    article: {
      type: Object,
      require: true
    }
  },

  mounted() {},

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    async deleteArticle(slug) {
      if (this.isDeleting) return;
      await Object(api_article["f" /* deleteArticle */])(slug);
      this.isDeleting = false;
      this.route.push("/");
    },

    async follow(followed, username) {
      if (this.isFollowing) return;
      const {
        data
      } = followed ? await Object(profiles["c" /* unFollowUser */])(username) : await Object(profiles["a" /* followUser */])(username);
      this.article.author.following = data.profile.following;
      this.isFollowing = false;
    },

    async favorite(favorited, slug) {
      if (this.isFavoriting) return;
      console.log(favorited);
      const {
        data
      } = favorited ? await Object(api_article["e" /* delFavorite */])(slug) : await Object(api_article["b" /* addFavorite */])(slug);
      this.article.favorited = data.article.favorited;

      if (this.article.favorited) {
        this.article.favoritesCount++;
      } else {
        this.article.favoritesCount--;
      }

      this.isFavoriting = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_d8f0d7fe_scoped_true_render,
  article_metavue_type_template_id_d8f0d7fe_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "d8f0d7fe",
  "159ef730"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=244b74cc&scoped=true&
var article_commentsvue_type_template_id_244b74cc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\" data-v-244b74cc><div class=\"card-block\" data-v-244b74cc><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-244b74cc>"+_vm._ssrEscape(_vm._s(_vm.newComment))+"</textarea></div> <div class=\"card-footer\" data-v-244b74cc><img src=\"user.image\" class=\"comment-author-img\" data-v-244b74cc> <button class=\"btn btn-sm btn-primary\" data-v-244b74cc>\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment,index){return _vm._ssrNode("<div class=\"card\" data-v-244b74cc>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-244b74cc><p class=\"card-text\" data-v-244b74cc>"+_vm._ssrEscape("\n        "+_vm._s(comment.body +index)+"\n      ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-244b74cc>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":"comment.author.image"}}),_vm._v("\n         \n        "),_c('span',{staticClass:"comment-author"},[_vm._v(_vm._s(comment.author.username))])]),_vm._ssrNode(" <span class=\"date-posted\" data-v-244b74cc>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,"MMM DD, YYYY")))+"</span> "+((comment.author.username===_vm.user.username)?("<span class=\"mod-options\" data-v-244b74cc><i class=\"ion-trash-a\" data-v-244b74cc></i></span>"):"<!---->"))],2)],2)})],2)}
var article_commentsvue_type_template_id_244b74cc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=244b74cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      newComment: ""
    };
  },

  // 如果不需要服务端渲染的话 无需使用 asyncData
  async mounted() {
    this.getAllComments();
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    async getAllComments() {
      const {
        data
      } = await Object(api_article["i" /* getComments */])(this.article.slug);
      this.comments = data.comments;
    },

    async addComment() {
      const {
        data
      } = await Object(api_article["a" /* addComments */])(this.article.slug, {
        comment: {
          body: this.newComment
        }
      });
      this.comments.unshift(data.comment); // 手动新增该条评论至评论列表中
      // this.getAllComments();
    },

    async deleteComment(index, id) {
      const {
        data
      } = await Object(api_article["g" /* deleteComments */])(this.article.slug, id);
      this.comments.splice(index, 1); // 手动删除该条评论
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_244b74cc_scoped_true_render,
  article_commentsvue_type_template_id_244b74cc_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "244b74cc",
  "cce0c152"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },
  name: "ArticleIndex",

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["c" /* articleDetail */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "13ff29c8",
  "7ffb4138"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map