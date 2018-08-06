import Vue from 'vue';
import VueRouter from 'vue-router';

//в этом модуле this.$store доступиться было бы нельзя
import {store} from './store'

Vue.use(VueRouter);

import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import Product from './components/Product';
import Checkout from './components/Checkout'
import E404 from './components/E404';

//массив, в котором храняться маршруты (роуты), которые связывают
//url адрес - path и компоненты- component
const routes = [
    {
      path: '',
      redirect: {name: 'products'} //с главной идёт редирект на products
    },
    {
      name: 'products',
      path: '/products',
      component: ProductsList,
      //хук роута, который сработает быстрее чем хук created на 500ms, что может
      //сократить или вообще убрать эфект задержки ответа с сервера
       beforeEnter(from, to, next) {
        console.log('beforeEnter');
        store.dispatch('products/loadItems'); //вызываем actions ответа от сервера
        next(); //завершение хука, если не вызвать, то хук не сработает
      }
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/products/:id',
      component: Product
    },
    {
      path: '/checkout',
      component: Checkout
    },
    {
      path: '*',
      component: E404
    }
];

//export const router, котороая хранить объект роутров с единественным полем
//созданного массива
export const router = new VueRouter({
  routes: routes,
  mode: 'history' //удобная работа с маршрутами в spa
});
