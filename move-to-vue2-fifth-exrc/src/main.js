import Vue from 'vue'
import store from './store.js'
import Layout from './Layout.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(Layout),
  store
})