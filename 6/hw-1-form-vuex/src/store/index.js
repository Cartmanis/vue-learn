import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    info: [
      {
          name: 'Name',
          value: 'Slavik',
          pattern: /^[a-zA-z ]{2,30}$/,
          status: false
      },
      {
          name: 'Phone',
          value: '123123121',
          pattern: /^[0-9]{7,14}$/,
          status: false
      },
      {
          name: 'Email',
          value: 'Mail@gmail.com',
          pattern: /.+@./,
          status: false
      },
      {
          name: 'Some Field 1',
          value: '1',
          pattern: /.+/,
          status: false
      },
      {
          name: 'Some Field 2',
          value: '2',
          pattern: /.+/,
          status: false
      }
    ],
    showData: false
  },

  getters: {
    info(state) {
      return state.info;
    },
    validCnt(state) { //геттер считает количество валидных полей для progressbar
      let done = 0;
      for(let i = 0; i < state.info.length; i++) {
            if(state.info[i].status) {
                done++;
            }
        }
      return done;
    },
    showData(state) {
      return state.showData;
    }
  },
  mutations: {
    changeStatus(state, dataStatus) {
      state.info[dataStatus.index].status = dataStatus.status;
    },
    showData(state) {
      state.showData = true;
    }
  },
  actions: {
    loadData(store) {
      setTimeout(() => {
        store.commit('showData');
      } , 1000);
      ;
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});
