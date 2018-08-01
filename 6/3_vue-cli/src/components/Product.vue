<template>
	<div>
		<h2>Product title</h2>
		<div class="price">
			Price: {{ price }}
		</div>
		<hr>
    <!--Мутации можно применять прям в template -->
		<button class="btn btn-warning" @click="minus">-1</button>
		<button class="btn btn-success" @click="plus">+1</button>
		<input type="text" v-model="cnt"><!--computed cnt c геттером и сеттором -->
	</div>
</template>

<script>
//Ипортим mapGetters и mapMutations для более удобной
//работы с геетерами и мутациями
	import {mapGetters} from 'vuex';
	import {mapMutations} from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'price'
      ]),
      //computed cnt с геттером и сеттором
			cnt: {
				get(){
					return this.$store.getters.cnt;
        },
        //сеттер работает через мутации
				set(value){ //Тут меняется cnt - c помощью вызова мутации setCnt
          this.$store.commit('setCnt', value); //вызов мутации setCnt,
          //передаем значение value
				}
			}
		},
		methods: { //Тут получаем наши мутации minus и plus
			...mapMutations([
				'minus',
				'plus'
			])
		}
	}
</script>
