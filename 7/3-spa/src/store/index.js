import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import products from './modules/products';
import cart from './modules/cart';

//в этом объекте сливаются все модули из папки modules
export const store = new Vuex.Store({
  modules: {
    menu,
    products,
    cart
  },
  strict: process.env.NODE_ENV !== 'production'
});
