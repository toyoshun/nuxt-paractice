import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d42f4f4 = () => interopDefault(import('../src/pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _8a2a6afa = () => interopDefault(import('../src/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1ab22e26 = () => interopDefault(import('../src/pages/resister.vue' /* webpackChunkName: "pages/resister" */))
const _08d40bc2 = () => interopDefault(import('../src/pages/update.vue' /* webpackChunkName: "pages/update" */))
const _1d79b128 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _2d42f4f4,
    name: "inspire"
  }, {
    path: "/login",
    component: _8a2a6afa,
    name: "login"
  }, {
    path: "/resister",
    component: _1ab22e26,
    name: "resister"
  }, {
    path: "/update",
    component: _08d40bc2,
    name: "update"
  }, {
    path: "/",
    component: _1d79b128,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
