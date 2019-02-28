import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js'
import Layout from './Layout.vue'

Vue.use(Vuex)



new Vue({
  el: '#app',
  render: h => h(Layout),
  store
})