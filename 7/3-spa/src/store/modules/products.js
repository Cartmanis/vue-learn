import Vue from 'vue';

export default {
     //namespaced - решает за нас проблему с одинаковыми именами в разных модулях
     namespaced: true,
    state: {
        //items: []
        items: getProducts()
    },
    getters: {
        items(state) {
            return state.items;
        },
        //Хранение в ассоциативном виде - нужно, чтобы коректно работал поиск по
        //id в массиве. Если просто применять items -почему то id всегда увеличивается
        //на 1
        itemsMap(state) {
          //теперь данные будут храниться не в массиве Items, а в объекте itemsMap
          let itemsMap = {};


          for(let i = 0; i < state.items.length; i++) {
            let product = state.items[i];
            itemsMap[product.id_product] = product;
          }
          return itemsMap;
        },
        //поскольку getters (как и computed) не могут принимать параметры, тут
        //используется примем где в геттере возвращается не значение, а функция
        //id берется из входящего параметра, этой функции, а не из входящего
        //параметра геттера
        getProduct: (state, getters)  => (id) => {
            return getters.itemsMap[id];
        }
    },
    mutations: {
      clearItems(state) {
        state.items = [];
      },
      loadItems(state, data) {
        state.items = data;
      }
    },
    actions: {
      loadItems(store) {
        store.commit('clearItems');//Обнуляем кэш и эмулируем задержку ответа от сервера
        //тут можно было бы использовать this.$http.get
        Vue.http.get('products.php')
                   .then(response => response.json())
                   .then(data => {
                     store.commit('loadItems', data);
                   });
      }
    }
};

function getProducts() {
  return [
    {
      id_product: 1,
      title: 'Iphone 5',
      price: 20000
    },
    {
      id_product: 2,
      title: 'Iphone 6',
      price: 25000
    },
    {
      id_product: 3,
      title: 'Iphone 7',
      price: 30000
    }
  ]
}
