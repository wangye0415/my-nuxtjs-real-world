exports.ids = [3];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/components/articles-item.vue?vue&type=template&id=43bf1bae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
            name: 'profile',
            params: {
              username: article.author.username,
            },
          }}},[_vm._v("\n          "+_vm._s(article.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD , YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoditeDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
          active: article.favorited,
        }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n      ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
        name: 'article',
        params: {
          slug: article.slug,
        },
      }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/components/articles-item.vue?vue&type=template&id=43bf1bae&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/components/articles-item.vue?vue&type=script&lang=js&
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

/* harmony default export */ var articles_itemvue_type_script_lang_js_ = ({
  name: "ArticlesItem",
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  methods: {
    async onFavorite(article) {
      article.favoditeDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["e" /* delFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoditeDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/components/articles-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articles_itemvue_type_script_lang_js_ = (articles_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/components/articles-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articles_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e65e32f4"
  
)

/* harmony default export */ var articles_item = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=0504c363&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"home-page\" data-v-0504c363>","</div>",[_vm._ssrNode("<div class=\"banner\" data-v-0504c363><div class=\"container\" data-v-0504c363><h1 class=\"logo-font\" data-v-0504c363>conduit</h1> <p data-v-0504c363>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-0504c363>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-0504c363>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-0504c363>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-0504c363>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-0504c363>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-0504c363>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                    active: _vm.tab === 'your_feed',
                  },attrs:{"exact":"","to":{
                    name: 'home',
                    query: {
                      tab: 'your_feed',
                    },
                  }}},[_vm._v("\n                  Your Feed\n                ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-0504c363>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                    active: _vm.tab === 'global_feed',
                  },attrs:{"exact":"","to":{
                    name: 'home',
                    query: {
                      tab: 'global_feed',
                    },
                  }}},[_vm._v("\n                  Global Feed\n                ")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-0504c363>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                    active: _vm.tab === 'tag',
                  },attrs:{"exact":"","to":{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: _vm.tag,
                    },
                  }}},[_vm._v("\n                  #"+_vm._s(_vm.tag)+"\n                ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),_c('articles-item',{attrs:{"articles":_vm.articles}}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-0504c363>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-0504c363>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                  active: _vm.page === item,
                }))+" data-v-0504c363>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                    name: 'home',
                    query: {
                      page: item,
                      tag: _vm.$route.query.tag,
                      tab: _vm.tab,
                    },
                  }}},[_vm._v("\n                  "+_vm._s(item)+"\n                ")])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-0504c363>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-0504c363>","</div>",[_vm._ssrNode("<p data-v-0504c363>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-0504c363>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                  name: 'home',
                  query: {
                    tag: item,
                    tab: 'tag',
                  },
                }}},[_vm._v("\n                "+_vm._s(item)+"\n              ")])}),1)],2)])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=0504c363&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/home/components/articles-item.vue + 4 modules
var articles_item = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  components: {
    ArticlesItem: articles_item["a" /* default */]
  },
  name: "HomeIndex",

  /**
   * 你可能想要在服务器端获取并渲染数据。Nuxt.js
   * 添加了asyncData方法使得你能够在渲染组件之前异步获取数据。
   * asyncData方法会在组件（限于页面组件）每次加载之前被调用。
   * 它可以在服务端或路由更新之前被调用。
   * 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据并返回给当前组件
   */
  // query 存储的是链接后面的所有参数
  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const {
      tag
    } = query;
    const tab = query.tab || "gloable_feed";
    const loadArticles = store.state.user && tab === "your_feed" ? article["j" /* getFeedArticle */] : article["h" /* getArticles */]; // 并行执行任务

    const [articleRes, tagRes] = await Promise.all([loadArticles({
      limit,
      //每页显示多少条数据
      offset: (page - 1) * limit,
      //偏移量，跳过几条数据
      tag
    }), Object(article["k" /* getTags */])()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(article => {
      article.favoditeDisabled = false;
    });
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab: query.tab || "global_feed"
    };
  },

  /**
   * 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
   * 使用watchQuery属性可以监听参数字符串的更改。
   * 如果定义的字符串发生变化，将调用所有组件方法(asyncData, fetch, validate, layout, ...)。 为了提高性能，默认情况下禁用。
   * 如果您要为所有参数字符串设置监听， 请设置： watchQuery: true.
   */
  watchQuery: ["page", "tag", "tab"],
  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      // Math.ceil() 向上取整
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {},

  head() {
    return {
      title: "my Realworld",
      meta: [{
        hid: "description",
        name: "description",
        content: "My custom description"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0504c363",
  "12ee59f9"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map