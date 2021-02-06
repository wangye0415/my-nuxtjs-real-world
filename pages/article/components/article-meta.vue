<template>
  <div>
    <div class="article-meta">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
      >
        <img src="article.author.image" />
      </nuxt-link>
      <div class="info">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: article.author.username,
            },
          }"
          class="author"
        >
          {{ article.author.username }}
        </nuxt-link>
        <span class="date">{{ article.createdAt | date("MMM DD, YYYY") }}</span>
      </div>
      <template v-if="user.username !== article.author.username">
        <button
          class="btn btn-sm btn-outline-secondary"
          :class="{
            active: article.author.following,
          }"
          :disabled="isDeleting"
          @click="follow(article.author.following, article.author.username)"
        >
          <i class="ion-plus-round"></i>
          {{
           ( article.author.following
              ? "UnFollow  "
              : "Follow  ") + article.author.username
          }}
          <!-- <span class="counter">(10)</span> -->
        </button>
        &nbsp;&nbsp;
        <button
          class="btn btn-sm btn-outline-primary"
          :class="{
            active: article.author.favorited,
          }"
          :disabled="isFavoriting"
          @click="favorite(article.favorited, article.slug)"
        >
          <i class="ion-heart"></i>
          &nbsp;
          {{ article.favorited ? "Favorite Delete" : "Favorite Post" }}
          <span class="counter">({{ article.favoritesCount }})</span>
        </button>
      </template>
      <template v-else>
        <span class="ng-scope">
          <nuxt-link
            :to="{
              name: 'editor',
              params: {
                slug: article.slug,
              },
            }"
            class="btn btn-outline-secondary btn-sm"
          >
            <i class="ion-edit"></i> Edit Article
          </nuxt-link>

          <button
            class="btn btn-outline-danger btn-sm"
            :class="{ disabled: isDeleting }"
            :disabled="isDeleting"
            @click="deleteArticle(article.slug)"
          >
            <i class="ion-trash-a"></i> Delete Article
          </button>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import { deleteArticle } from "@/api/article";
import { followUser, unFollowUser } from "@/api/profiles";
import { addFavorite, delFavorite } from "@/api/article";
import { mapState } from "vuex";
export default {
  name: "ArticleMeta",
  data() {
    return {
      //是否正在删除文章
      isDeleting: false,
      //是否正在设为喜欢、取消喜欢文章
      isFavoriting: false,
      //是否正在关注、取消关注作者
      isFollowing: false,
    };
  },
  props: {
    article: {
      type: Object,
      require: true,
    },
  },
  mounted() {},
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async deleteArticle(slug) {
      if (this.isDeleting) return;
      await deleteArticle(slug);
      this.isDeleting = false;
      this.route.push("/");
    },
    async follow(followed, username) {
      if (this.isFollowing) return;
      const { data } = followed
        ? await unFollowUser(username)
        : await followUser(username);
      this.article.author.following = data.profile.following;
      this.isFollowing = false;
    },
    async favorite(favorited, slug) {
      if (this.isFavoriting) return;
      console.log(favorited)
      const { data } = favorited
        ? await delFavorite(slug)
        : await addFavorite(slug);
      this.article.favorited = data.article.favorited;
      if (this.article.favorited) {
        this.article.favoritesCount++
      } else {
        this.article.favoritesCount--
      }
      this.isFavoriting = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>