<template>
  <div>
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <!-- tab 标签页 -->
              <ul class="nav nav-pills outline-active">
                <li v-if="user" class="nav-item">
                  <nuxt-link
                    class="nav-link"
                    exact
                    :class="{
                      active: tab === 'your_feed',
                    }"
                    :to="{
                      name: 'home',
                      query: {
                        tab: 'your_feed',
                      },
                    }"
                  >
                    Your Feed
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    class="nav-link"
                    exact
                    :class="{
                      active: tab === 'global_feed',
                    }"
                    :to="{
                      name: 'home',
                      query: {
                        tab: 'global_feed',
                      },
                    }"
                  >
                    Global Feed
                  </nuxt-link>
                </li>

                <li v-if="tag" class="nav-item">
                  <nuxt-link
                    class="nav-link"
                    exact
                    :class="{
                      active: tab === 'tag',
                    }"
                    :to="{
                      name: 'home',
                      query: {
                        tab: 'tag',
                        tag: tag,
                      },
                    }"
                  >
                    #{{ tag }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <articles-item :articles="articles" />
            <!-- 翻页 -->
            <nav>
              <ul class="pagination">
                <li
                  class="page-item"
                  v-for="item in totalPage"
                  :key="item"
                  :class="{
                    active: page === item,
                  }"
                >
                  <nuxt-link
                    class="page-link"
                    :to="{
                      name: 'home',
                      query: {
                        page: item,
                        tag: $route.query.tag,
                        tab: tab,
                      },
                    }"
                  >
                    {{ item }}
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
          <!-- 标签 -->
          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>
              <div class="tag-list">
                <nuxt-link
                  class="tag-pill tag-default"
                  v-for="item in tags"
                  :key="item"
                  :to="{
                    name: 'home',
                    query: {
                      tag: item,
                      tab: 'tag',
                    },
                  }"
                >
                  {{ item }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticles,
  getFeedArticle,
  getTags,
} from "@/api/article";
import { mapState } from "vuex";
import ArticlesItem from "./components/articles-item";
export default {
  components: { ArticlesItem },
  name: "HomeIndex",
  /**
   * 你可能想要在服务器端获取并渲染数据。Nuxt.js
   * 添加了asyncData方法使得你能够在渲染组件之前异步获取数据。
   * asyncData方法会在组件（限于页面组件）每次加载之前被调用。
   * 它可以在服务端或路由更新之前被调用。
   * 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据并返回给当前组件
   */
  // query 存储的是链接后面的所有参数

  async asyncData({ query, store }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const { tag } = query;
    const tab = query.tab || "gloable_feed";
    const loadArticles =
      store.state.user && tab === "your_feed" ? getFeedArticle : getArticles;

    // 并行执行任务
    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit, //每页显示多少条数据
        offset: (page - 1) * limit, //偏移量，跳过几条数据
        tag,
      }),
      getTags(),
    ]);
    const { articles, articlesCount } = articleRes.data;
    const { tags } = tagRes.data;
    articles.forEach((article) => {
      article.favoditeDisabled = false;
    });

    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab: query.tab || "global_feed",
    };
  },
  /**
   * 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
   * 使用watchQuery属性可以监听参数字符串的更改。
   * 如果定义的字符串发生变化，将调用所有组件方法(asyncData, fetch, validate, layout, ...)。 为了提高性能，默认情况下禁用。
   * 如果您要为所有参数字符串设置监听， 请设置： watchQuery: true.
   */
  watchQuery: ["page", "tag", "tab"],
  computed: {
    ...mapState(["user"]),
    totalPage() {
      // Math.ceil() 向上取整
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
  methods: {},
  head() {
    return {
      title: "my Realworld",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>