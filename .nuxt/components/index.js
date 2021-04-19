import { wrapFunctional } from './utils'

export { default as Logo } from '../../src/components/Logo.vue'
export { default as Test } from '../../src/components/Test.vue'
export { default as VuetifyLogo } from '../../src/components/VuetifyLogo.vue'

export const LazyLogo = import('../../src/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyTest = import('../../src/components/Test.vue' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../src/components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
