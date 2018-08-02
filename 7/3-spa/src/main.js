import Vue from 'vue'
import App from './App.vue';

import {store} from './store'; //vuex
import {router} from './routes';//vue-router

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
