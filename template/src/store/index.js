import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Auth from './Auth'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.VUE_APP_ENV !== 'production',
  modules: {
    Auth
  },
  plugins: [
    createPersistedState({
      keyCripto: process.env.VUE_APP_PROJECT_KEY,
      paths: ['Auth']
    })
  ]
})
