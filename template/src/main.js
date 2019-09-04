require('@babel/polyfill')
require('es6-promise/auto')

// VUE
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = process.env.VUE_APP_ENV === 'production'

// ROUTER and STORE
import { sync } from 'vuex-router-sync'
import router from './router'

const store = require('./store/index').default
sync(store, router)

// PLUGINS
const i18n = require('./utils/plugins/i18n').default

const VeeValidate = require('vee-validate').default
const Validator = require('vee-validate').Validator
const pt_BR = require('vee-validate/dist/locale/pt_BR')
const VeeValidateCustoms = require('./utils/js/VeeValidateCustoms').default
Vue.use(VeeValidate)
Validator.localize('pt_BR', pt_BR)
VeeValidateCustoms(Validator)

require('font-awesome/css/font-awesome.min.css')
require('./utils/plugins/vuetify')
require('./utils/plugins/axios')
require('./utils/plugins/element')

// STYLES
require('./utils/styles/main.scss')

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
