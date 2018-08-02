import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import Product from './components/Product';
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
      component: ProductsList
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/Product',
      component: Product
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
