<template>
  <div>
    <div class="profile-page">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <img :src="profile.image" class="user-img" />
              <h4>{{ profile.username }}</h4>
              <p>
                {{ profile.bio }}
              </p>
              <button
                v-if="profile.username!==user.username"
                class="btn btn-sm btn-outline-secondary action-btn"
                :disabled="isFollowing"
                @click="follow(profile.following)"
              >
                <i class="ion-plus-round"></i>
                  {{ (profile.following ?'UnFollow  ':'Follow  ')+ profile.username }}
              </button>
              <nuxt-link 
              v-else
              to="/settings" class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-gear-a"></i> Edit Profile Settings
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <div
                    class="nav-link"
                    :class="{ active: activeTab === 1 }"
                    @click="tabChange(1)"
                  >
                    My Articles
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="nav-link"
                    :class="{ active: activeTab === 2 }"
                    @click="tabChange(2)"
                  >
                    Favorited Articles
                  </div>
                </li>
              </ul>
            </div>

            <div class="article-preview">
              <articles-item :articles="articles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from "@/api/article";
import { mapState } from "vuex";
import ArticlesItem from "../home/components/articles-item";
import { getProfile, followUser, unFollowUser } from "@/api/profiles";
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  components: { ArticlesItem },
  data() {
    return {
      // 配置信息
      profile: {},
      articles: [],
      activeTab: 1,
      isFollowing: false,
    };
  },
  middleware: "authenticated",
  name: "UserProfile",
  mounted() {
    this.loadArticles({ author: this.user.username });
    this.getProfileInfor(this.$route.params.username);
    
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async loadArticles(params) {
      const data = await getArticles(params);
      this.articles = data.data.articles;
      this.articles.forEach((article) => {
        article.favoditeDisabled = false;
      });
    },
    tabChange(num) {
      this.activeTab = num;
      if (num === 2) {
        this.loadArticles({ favorited: this.user.username });
      } else {
        this.loadArticles({ author: this.user.username });
      }
    },
    async getProfileInfor(params) {
      const { data } = await getProfile(params);
      this.profile = data.profile
      console.log(this.profile)
    },
    async follow(followed) {
      if (!this.isFollowing) {
        this.isFollowing = true;
        if (followed) {
          await unFollowUser(this.user.username);
          this.profile.following=false
        } else {
          await followUser(this.user.username);
          this.profile.following=true
        }
      }
      this.isFollowing = false;
    },
  },
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>