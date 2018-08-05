<template>
  <div>
    <h1>{{product.title}}</h1>
    <router-link :to = "{name: 'products'}">Back to Home</router-link>
    <hr>
    <div class="alert alert-success"></div>
    {{product.price}}
    <button v-if = 'isInCart(product.id_product)' class = 'btn btn-success'
    @click = 'addInCart(product.id_product)'>
      Add to Cart</button>
    <button v-else class = 'btn btn-warning'
    @click = 'removeFromCart(product.id_product)'>
      Remove from Cart</button> <!--Д.з -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    computed: {
      ...mapGetters('cart', {
         productInCart: 'products'
      }),
      id() {
       return this.$route.params.id;
      },
      product() {
        //поскольку геттер возвращает не значение, а функцию, то мы вызываем эту
        //функцию с параметром this.id
        return this.$store.getters['products/getProduct'](this.id);
      }
    },
    methods: {
      ...mapActions('cart', {
        addInCart: 'add',
        removeFromCart: 'remove'
      }),
      isInCart(id) {
        if(this.productInCart.indexOf(id) === -1) {
          return true;
        }
        return false;
      }
    }
}
</script>
