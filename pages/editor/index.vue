<template>
  <div>
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <ul class="error-messages">
              <!-- template 不会生成额外的dom节点 -->
              <template v-for="(messages, field) in errors">
                <li v-for="(message, index) in messages" :key="index">
                  {{ field }} {{ message }}
                </li>
              </template>
            </ul>
            <form @submit.prevent="onSubmit">
              <fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Article Title"
                    v-model="article.title"
                    required
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="What's this article about?"
                    v-model="article.description"
                    required
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    v-model="article.body"
                    required
                  ></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter tags"
                    v-model="tags"
                  />
                  <div class="tag-list"></div>
                </fieldset>
                <button
                  class="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, articleDetail } from "@/api/article";
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  name: "EditorIndex",
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
      errors: {}, //错误信息
      tags: "",
    };
  },
  mounted() {
    if (this.$route.params && this.$route.params.slug) {
      this.loadArticleDetail(this.$route.params.slug);
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await createArticle({ article: this.article });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
      this.$router.push("/");
    },
    async loadArticleDetail(slug) {
      const { data } = await articleDetail(slug);
      console.log(data);
      this.article = {
        title: data.article.title,
        description: data.article.description,
        body: data.article.body,
        tagList: data.article.tagList,
      };
    },
  },
};
</script>

<style scoped>
</style>