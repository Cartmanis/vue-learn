import Vue from 'vue';
import App from './App.vue';
//Импортим /store.index.js. Причем, так как exprot был не default, а
//export const используем заись {store}, а не просто
//store(тут вообще можно было бы придумать любое имя)
//export default означает, что экспортитуется ровно один компонент
import {store} from './store/'

new Vue({
  el: '#app',
  store, //передаем ипортированный объект store во Vue при инициализации
  render: h => h(App)
})
