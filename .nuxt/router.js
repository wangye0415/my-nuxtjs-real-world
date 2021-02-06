import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20823046 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _361ac0fb = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _e514b266 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _40640fe6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _a99dcb82 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _14b35689 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _72cf894c = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _20823046,
    children: [{
      path: "",
      component: _361ac0fb,
      name: "home"
    }, {
      path: "/login",
      component: _e514b266,
      name: "login"
    }, {
      path: "/register",
      component: _e514b266,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _40640fe6,
      name: "profile"
    }, {
      path: "/settings",
      component: _a99dcb82,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _14b35689,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _72cf894c,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
