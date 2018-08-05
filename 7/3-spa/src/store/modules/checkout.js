export default {
  //namespaced - решает за нас проблему с одинаковыми именами в разных модулях
  namespaced: true,

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
      }
    ],
    showOrder: false,
    processOrder: false,
    dataServer: {}
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
    showOrder(state) {
      return state.showOrder;
    },
    processOrder(state) {
      return state.processOrder;
    },
    dataServer(state) {
      return state.dataServer;
    }
  },
  mutations: {
    setInfoValue(state, data) {
      state.info[data.index].value = data.value;
    },
    setInfoStatus(state, dataStatus) {
      state.info[dataStatus.index].status = dataStatus.status;
    },
    sendOrder(state, data) {
      state.showOrder = true;
      state.processOrder = false;
      state.dataServer = data;
    },
    changeProcessOrder(state) {
      state.processOrder = true;
    }
  },
  actions: {
    setInfoValue(store, data) {
      store.commit('setInfoValue', data);
    },
    setInfoStatus(store, dataStatus) {
      store.commit('setInfoStatus', dataStatus);
    },
    sendOrder(store, data) {
      store.commit('changeProcessOrder');
      setTimeout(() => {
        store.commit('sendOrder', data);
      }, 2000);

    }
  }
}
