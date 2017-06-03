import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './modules/actions'
import * as mutations from './modules/mutations'
import * as getters from './modules/getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    dataItems: [],
    dataCarts: [],
    cart: [],
    user: [],
    signIn: [],
    signUp: [],
    orders: [],
    listOrders: [],
    categories: [],
    total: 0
  },
  getters: getters.Getters,
  mutations: mutations.Mutations,
  actions: actions.Actions
})