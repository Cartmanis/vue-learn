import Vue from 'vue'
import App from './App.vue';

import {store} from './store'; //vuex
import {router} from './routes';//vue-router
import VueResource from 'vue-resource';//Для работы с Ajax запросами -появяться методы get, post и.т.д

//Vue.prototype.http = Axios;
Vue.use(VueResource); //Внедряем VueResource во Vue

Vue.http.options.root = 'http://js.dmitrylavrik.ru/api/' //настравиваем адрес сервера

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
