import Vue from 'vue'
import Vuex from 'vuex'
import * as products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModal: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products
  }
})
