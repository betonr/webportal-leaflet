import Vue from 'vue'
import Router from 'vue-router'

const Visualization = require('./modules/Visualization/routes').default
let routes = [
  ...Visualization
]

Vue.use(Router)

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE,
  base: process.env.VUE_APP_BASE_URL,
  routes
})
