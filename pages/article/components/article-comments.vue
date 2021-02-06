<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="newComment"
        ></textarea>
      </div>
      <div class="card-footer">
        <img src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click.prevent="addComment">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="(comment,index) in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body +index}}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          <img src="comment.author.image" class="comment-author-img" />
          &nbsp;
          <span class="comment-author">{{ comment.author.username }}</span>
        </nuxt-link>
        <span class="date-posted">{{
          comment.createdAt | date("MMM DD, YYYY")
        }}</span>
        <span class="mod-options" v-if="comment.author.username===user.username">
          <i class="ion-trash-a" @click="deleteComment(index,comment.id)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, addComments, deleteComments } from "@/api/article";
import { mapState } from "vuex";
export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      newComment: "",
    };
  },
  // 如果不需要服务端渲染的话 无需使用 asyncData
  async mounted() {
    this.getAllComments();
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async getAllComments() {
      const { data } = await getComments(this.article.slug);
      this.comments = data.comments;
    },
    async addComment() {
      const { data } = await addComments(this.article.slug, {
        comment: {
          body: this.newComment,
        },
      });
      this.comments.unshift(data.comment);
      // 手动新增该条评论至评论列表中

      // this.getAllComments();
    },
    async deleteComment(index, id) {
      const { data } = await deleteComments(this.article.slug, id);
      this.comments.splice(index, 1);
      // 手动删除该条评论
    },
  },
};
</script>

<style lang="scss" scoped>
</style>