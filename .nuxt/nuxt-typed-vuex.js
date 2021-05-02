import { getAccessorFromStore } from 'typed-vuex'

import { createStore } from '/Users/st/Nuxt/nuxt-practice/.nuxt/store'

const storeAccessor = getAccessorFromStore(createStore())

export default async ({ store }, inject) => {
  inject('accessor', storeAccessor(store))
}
