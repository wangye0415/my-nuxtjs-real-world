<template>
  <div>
    <!-- 顶部导航 -->
    <header>
      <nav class="navbar navbar-light">
        <div class="container">
          <nuxt-link to="/" class="navbar-brand">conduit</nuxt-link>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <!-- 路由精确匹配 exact  必须等于的时候才会添加 linkActiveClass中配置的class-->
              <nuxt-link to="/" class="nav-link" exact>Home</nuxt-link>
            </li>
            <template v-if="user">
              <li class="nav-item">
                <nuxt-link to="/editor" class="nav-link">
                  <i class="ion-compose"></i>&nbsp;New Post
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/settings" class="nav-link">
                  <i class="ion-gear-a"></i>&nbsp;Settings
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: {
                      username: user.username,
                    },
                  }"
                  class="nav-link"
                >
                  <img :src="user.image" alt="" class="user-pic" />
                  {{ user.username }}
                </nuxt-link>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <nuxt-link to="/login" class="nav-link">
                  &nbsp;Sign in
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/register" class="nav-link">
                  &nbsp;Sign up
                </nuxt-link>
              </li>
            </template>
          </ul>
        </div>
      </nav>
    </header>
    <!-- 顶部导航 -->

    <!-- 子路由 -->
    <nuxt-child />
    <!-- 子路由 -->

    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
    <!-- 底部 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayoutIndex",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
</style>