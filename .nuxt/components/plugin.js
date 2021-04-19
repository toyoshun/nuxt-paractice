import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../src/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Test: () => import('../../src/components/Test.vue' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../src/components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
