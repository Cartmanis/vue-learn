<template>
	<div>
		<div>Count: {{ cnt }}</div>
		<div>Total: {{ total }}</div>
	</div>
</template>

<script>
  //Ипортируем mapGetters из vuex для более удобной работы с геттерами
	import {mapGetters} from 'vuex';

	export default {
		computed: { //используем массив необходимых геттеров из store/index.js
			...mapGetters([
				'cnt',
				'total'
			])
		}
	}
</script>
