<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<app-product>
					</app-product>
					<hr>
					<div class="form-group">
				        <label>Name</label>
				        <input type="text"  class="form-control" v-model="name">
				    </div>
				    <div class="form-group">
				        <label>Phone</label>
				        <input type="text"  class="form-control" v-model="phone">
				    </div>
					<button class="btn btn-primary" :disabled="btnDisabled"
          @click="onOrder">Order now
					</button>
					<div class="alert alert-success"
						 v-if="showResult">
						Your order is done!
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import AppProduct from './Product';
	import {mapGetters} from 'vuex';

	export default {
		data(){
      //внутринние данные компонента, без использования vuex store
      //тут как бы локальные данные компонента, а во vuex store глобальные
			return {
				name: '',
				phone: ''
			};
		},
    computed: { //тут с помощью деструкторизации объекта в  Es6 используем в
    //computed не только mapGetters, но и btnDisabled и showResult
			...mapGetters([
				'cnt',
				'orderState'
			]),
			btnDisabled(){ //cnt приходит из mapGetters
        return this.cnt < 1 || this.orderState === 'pending'
        || this.name === '' || this.phone === '';
			},
			showResult(){
				return this.orderState == 'done';
			}
		},
		methods: {
			onOrder(){
        //sendOrder - имя action, а втрой параметр объект payload
				this.$store.dispatch('sendOrder', { //dispath вызывает action
					name: this.name,
					phone: this.phone
				});
			}
		},
		components: {
			AppProduct
		}
	}
</script>
<style scoped>
	.alert{
		margin: 10px 0;
	}
</style>
