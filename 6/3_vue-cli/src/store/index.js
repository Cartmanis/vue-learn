import Vue from 'vue';
//для подключения Vuex его нужно установить: npm i --save vuex, так как
//во vue-cli библиотеки vuex нет
import Vuex from 'vuex';

//используем Vuex во Vue - делаем для того, чтобы переменная store
//появилась в каждом компоненте Vue
Vue.use(Vuex);

export const store = new Vuex.Store({
  //в даном объекте храняться состояния всего приложения
	state: {
		cnt: 0,
		price: 1000,
		orderState: null
  },
  //использование state внутри компонентов не принято, для этого
  //существуют геттеры
	getters: {
		cnt(state){
			return state.cnt;
		},
		price(state){
			return state.price;
		},
		total(state){
			return state.cnt * state.price;
		},
		orderState(state){
			return state.orderState;
		}
  },
  //мутация - заранее разрешенные действия на имзенения переменных state
  //напрямую без мутаций переменные изменять можно но не желательно
  //первый параметр у всех мутаций state
	mutations: {
		minus(state){ //мутация на минус state.cnt
			if(state.cnt > 0){
				state.cnt--;
			}
		},
		plus(state){ //мутация на plus state.cnt
			state.cnt++;
    },
    //orderSend и orderDone две мутации, которые необходимы для actions
		orderSend(state){
			state.orderState = 'pending';
		},
		orderDone(state){
			state.orderState = 'done';
    },
     //мутация на установку state.cnt, принимает дополнительный параметр
    //count. Все мутации принимают ровно один параметр - для большего
    //количества параметров используем object
		setCnt(state, count){
			//count = count.replace(/[^0-9]/g, '');
			count = parseInt(count);

			if(count < 0){
				count = 0;
			}

			state.cnt = count;
		}
	},
	actions: {
    /* Мутации не принято вызывать в компонентах, как и state - для этого есть
    actions. В принципе можно и мутации, но в случае с асинхронным кодом будет
    работать только actions
		minus(store){
			store.commit('minus');
    },*/
    //Поскольку мутации не могут работать с асинхронным кодом, то необходимо
    //использовать actions.
    //В качестве параметра принимается не state, а store, поскольку actions
    //не работает со state напрямую, а работают через мутации
		sendOrder(store, payload){
			store.commit('orderSend'); //переключаем состояние в положение pending

			setTimeout(() => {//через секунду переключаем состояние в положение done
				console.log(payload); //использование переданного объекта
				store.commit('orderDone');
			}, 1000);
		}
  },
  //строгий режим запрещеает изменять переменные state без мутаций
  //в poduction снимаем строгий режим- так как со strict
  //идет дополнительная нагрузка на приложение
	strict: process.env.NODE_ENV !== 'production'
});
