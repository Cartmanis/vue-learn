import Vue from 'vue'
import App from './App.vue'

import {store} from './store';

new Vue({
  el: '#app',
  store,
  render: h => h(App) //задача файла main.js в импорте файла App.vue и передачи его в render функцию.
  //рендер функция передает компонент App в createElement, то есть рендерит компонент. По большому счету вставляет <App></App> в нужное метсто файла index.html
})
