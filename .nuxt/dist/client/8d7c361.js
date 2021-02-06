(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{187:function(t,e,r){"use strict";r.d(e,"h",(function(){return o})),r.d(e,"j",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return m})),r.d(e,"f",(function(){return f})),r.d(e,"d",(function(){return v})),r.d(e,"i",(function(){return h})),r.d(e,"a",(function(){return O})),r.d(e,"g",(function(){return w})),r.d(e,"k",(function(){return j}));var n=r(61),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},v=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},O=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},w=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},j=function(){return Object(n.b)({method:"GET",url:"/api/tags"})}},273:function(t,e,r){"use strict";r.r(e);r(36);var n=r(3),article=r(187),o={middleware:"authenticated",name:"EditorIndex",data:function(){return{article:{title:"",description:"",body:"",tagList:[]},errors:{},tags:""}},mounted:function(){this.$route.params&&this.$route.params.slug&&this.loadArticleDetail(this.$route.params.slug)},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(article.d)({article:t.article});case 3:r=e.sent,r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.errors=e.t0.response.data.errors;case 10:t.$router.push("/");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},loadArticleDetail:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(article.c)(t);case 2:n=r.sent,data=n.data,console.log(data),e.article={title:data.article.title,description:data.article.description,body:data.article.body,tagList:data.article.tagList};case 6:case"end":return r.stop()}}),r)})))()}}},c=r(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("ul",{staticClass:"error-messages"},[t._l(t.errors,(function(e,n){return t._l(e,(function(e,o){return r("li",{key:o},[t._v("\n                "+t._s(n)+" "+t._s(e)+"\n              ")])}))}))],2),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title",required:""},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?",required:""},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)",required:""},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"})]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"submit"}},[t._v("\n                Publish Article\n              ")])])])])])])])])}),[],!1,null,"01c73560",null);e.default=component.exports}}]);