<template>
  <div>
    <h1>Order now</h1>
    <hr>
    <form v-if = 'countInCart > 0' @submit.prevent = 'onOrderData'>
      <div class="progress">
          <div class="progress-bar" role="progressbar" v-bind:style = 'progressWidth'></div>
      </div>
      <app-input v-for ='(item, index) in info' :key = 'index'
      :name = 'item.name' :value = 'item.value' :pattern = 'item.pattern'
        @update:value = "setValue({index: index, value:$event})"
        @change-status = "setStatus({index: index, status: $event})">
      </app-input>
      <hr>

      <button class ='btn' :class = 'btnClass' :disabled = 'disabledButton'>
        {{btnText}}</button>
    </form>
    <div v-else class="alert alert-warning">В корзине нет товаров</div>
    <div v-if = "showOrder" class = "alert alert-primary">
        <h3>Заказ успешно принят</h3>
        <div>Имя: {{dataOnServer.name}}</div>
        <div>Номер телефона: {{dataOnServer.phone}}</div>
        <div>Электронная почта: {{dataOnServer.email}}</div>
        <div>Id заказанных товаров: {{dataOnServer.productsId}}</div>
    </div>
  </div>
</template>

<script>
import AppInput from './Input';
import { mapGetters } from 'vuex';
import {mapActions} from 'vuex';

export default {
  components: {
      'app-input' : AppInput
  },
  methods: {
      ...mapActions('checkout', {
        setStatus: 'setInfoStatus',
        setValue: 'setInfoValue',
        sendServer: 'sendOrder'
      }),
      onOrderData() {
        this.sendServer({
          name: this.info[0].value,
          phone: this.info[1].value,
          email: this.info[2].value,
          productsId: this.productsInCart
        });
      }
  },
  computed: {
    ...mapGetters('checkout', {
      info: 'info',
      countValid: 'validCnt',
      showOrder: 'showOrder',
      processOrder: 'processOrder',
      dataOnServer: 'dataServer'
    }),
    ...mapGetters('cart', {
      productsInCart: 'products',
      countInCart: 'countInCart'

    }),
    progressWidth() {
      return `width:${this.countValid * 100 / this.info.length}%`;
    },
    disabledButton() {
      return this.countValid < this.info.length;
    },
    btnClass() {
      return this.processOrder ? 'btn-default' : 'btn-success'
    },
    btnText() {
      return this.processOrder ? '...Loading' : 'Send Order';
    }
  }
}
</script>
