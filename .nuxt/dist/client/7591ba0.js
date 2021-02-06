(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"j",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"c",(function(){return d})),r.d(e,"f",(function(){return v})),r.d(e,"d",(function(){return m})),r.d(e,"i",(function(){return h})),r.d(e,"a",(function(){return O})),r.d(e,"g",(function(){return w})),r.d(e,"k",(function(){return j}));var n=r(61),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},m=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},O=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},w=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},j=function(){return Object(n.b)({method:"GET",url:"/api/tags"})}},189:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return l}));var n=r(61),c=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},o=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},l=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},193:function(t,e,r){"use strict";r(36);var n=r(3),c=r(187),o={name:"ArticlesItem",props:{articles:{type:Array,required:!0}},methods:{onFavorite:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoditeDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(c.e)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(c.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoditeDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},l=r(23),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n          "+t._s(article.author.username)+"\n        ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD , YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoditeDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n      ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),0)}),[],!1,null,null,null);e.a=component.exports},196:function(t,e,r){var content=r(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("1e66a012",content,!0,{sourceMap:!1})},209:function(t,e,r){"use strict";r(196)},210:function(t,e,r){(e=r(79)(!1)).push([t.i,".nav-link[data-v-3680ca10]{cursor:pointer}",""]),t.exports=e},271:function(t,e,r){"use strict";r.r(e);r(60),r(24),r(25),r(11),r(49),r(36);var n=r(3),c=r(26),article=r(187),o=r(37),l=r(193),f=r(189);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{ArticlesItem:l.a},data:function(){return{profile:{},articles:[],activeTab:1,isFollowing:!1}},middleware:"authenticated",name:"UserProfile",mounted:function(){this.loadArticles({author:this.user.username}),this.getProfileInfor(this.$route.params.username)},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["user"])),methods:{loadArticles:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(article.h)(t);case 2:data=r.sent,e.articles=data.data.articles,e.articles.forEach((function(article){article.favoditeDisabled=!1}));case 5:case"end":return r.stop()}}),r)})))()},tabChange:function(t){this.activeTab=t,2===t?this.loadArticles({favorited:this.user.username}):this.loadArticles({author:this.user.username})},getProfileInfor:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(f.b)(t);case 2:n=r.sent,data=n.data,e.profile=data.profile,console.log(e.profile);case 6:case"end":return r.stop()}}),r)})))()},follow:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.isFollowing){r.next=11;break}if(e.isFollowing=!0,!t){r.next=8;break}return r.next=5,Object(f.c)(e.user.username);case 5:e.profile.following=!1,r.next=11;break;case 8:return r.next=10,Object(f.a)(e.user.username);case 10:e.profile.following=!0;case 11:e.isFollowing=!1;case 12:case"end":return r.stop()}}),r)})))()}}},m=(r(209),r(23)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v("\n              "+t._s(t.profile.bio)+"\n            ")]),t._v(" "),t.profile.username!==t.user.username?r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{disabled:t.isFollowing},on:{click:function(e){return t.follow(t.profile.following)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n                "+t._s((t.profile.following?"UnFollow  ":"Follow  ")+t.profile.username)+"\n            ")]):r("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{to:"/settings"}},[r("i",{staticClass:"ion-gear-a"}),t._v(" Edit Profile Settings\n            ")])],1)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link",class:{active:1===t.activeTab},on:{click:function(e){return t.tabChange(1)}}},[t._v("\n                  My Articles\n                ")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link",class:{active:2===t.activeTab},on:{click:function(e){return t.tabChange(2)}}},[t._v("\n                  Favorited Articles\n                ")])])])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("articles-item",{attrs:{articles:t.articles}})],1)])])])])])}),[],!1,null,"3680ca10",null);e.default=component.exports}}]);