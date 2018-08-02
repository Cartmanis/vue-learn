import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    info: [
      {
          name: 'Name',
          value: '',
          pattern: /^[a-zA-z ]{2,30}$/,
          status: false
      },
      {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/,
          status: false
      },
      {
          name: 'Email',
          value: '',
          pattern: /.+@./,
          status: false
      },
      {
          name: 'Some Field 1',
          value: '',
          pattern: /.+/,
          status: false
      },
      {
          name: 'Some Field 2',
          value: '',
          pattern: /.+/,
          status: false
      }
    ],
    //у меня в дз было одно поле showData
    formProccess: false, //флаг для анимации кнопки при загрузке
    formSubmited: false //фдаг для показа результата
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
    name(state) {
      return  state.info[0].status ? state.info[0].value : '';
    },
    formProccess(state) {
      return state.formProccess;
    },
    formSubmited(state) {
      return state.formSubmited;
    }
  },
  mutations: {
    setInfoValue(state, data) {
      state.info[data.i].value = data.val;
    },
    setInfoStatus(state, dataStatus) {
      state.info[dataStatus.index].status = dataStatus.status;
    },
    startSubmit(state) {
      state.formProccess = true;
    },
    submitted(state) {
      state.formSubmited = true;
      state.formProccess = false;
    }
  },
  actions: {
    formSubmited(store) {
      store.commit('startSubmit');

      setTimeout(() => {
        store.commit('submitted');
      } , 1000);
      ;
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});
