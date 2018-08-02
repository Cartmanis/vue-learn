import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  state: {
    info:[
      {
          type: 'radio',
          title: 'Какой тег задаёт ссылку?',
          answers: [ 'a', 'div', 'span', 'img'],
      },
      {
          type: 'checkbox',
          title: 'Какие из этих тегов строчные?',
          answers: ['a', 'div', 'span', 'img'],
      }
    ],
    radioAnswer:'',
    checkAnswers: [],
    currentQuestitng: '1'
  },

  getters: {
    info(state) {
      return state.info;
    },
    titleRadio(state) {
      return state.info[0].title;
    },
    titleCheck(state) {
      return state.info[1].title;
    },
    radioAnswer(state) {
      return state.radioAnswer;
    },
    checkAnswers(state) {
      return state.checkAnswers;
    },
    currentQuestitng(state) {
      return state.currentQuestitng;
    }
  },

  mutations: {
    setRadioAnswer(state, value) {
      state.radioAnswer = value;
    },
    setCheckAnswer(state, arr) {
      state.checkAnswers = arr;
    },
    changeQuesting(state, questing) {
      state.currentQuestitng = questing;
    }
  },
  actions: {
    setRadioAnswer(store, value) {
      store.commit('setRadioAnswer', value);
    },
    setCheckAnswer(store, arr) {
      store.commit('setCheckAnswer', arr);
    },
    changeQuesting(store, questing) {
      store.commit('changeQuesting', questing);
    }
  },
//  strict: process.env.NODE_ENV !== 'production'
});
