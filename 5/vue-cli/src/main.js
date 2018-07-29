import Vue from 'vue' //Ипорт vue из из node_moules
import App from './App.vue' //App.vue берется из-того же каталога, что и сам файл main.js

//Пример глобальной регистрации компонента
/*import AppInput from './components/Input.vue' //импортируем наш компонент
Vue.component('app-input', AppInput); //глобально регистрируем наш компонент Input*/

new Vue({
  el: '#app',
  render: h => h(App) //задача файла main.js в импорте файла App.vue и передачи его в render функцию.
  //рендер функция передает компонент App в createElement, то есть рендерит компонент. По большому счету вставляет <App></App> в нужное метсто файла index.html
})
