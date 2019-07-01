export default {
  namespaced: true,

  state: {
    token: '',
    client: {},
  },

  getters: {
    userToken(state) {
      return state.token
    },
    userClient(state) {
      return state.client
    },
  },

  mutations: {
    setToken(state, token) {
      token = String(token)
      state.token = token
    },
    setClient(state, payload) {
      const client = Object.assign(Object.assign({}, state.client), Object.assign({}, payload))
      state.client = client
    },
    resetUser(state) {
      state.token = ''
      state.client = {}
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setClient({ commit }, client) {
      commit('setClient', client)
    },
    resetUser({ commit }) {
      commit('resetUser')
    }
  }
}
