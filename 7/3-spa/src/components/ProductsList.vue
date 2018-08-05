<template>
  <div>
    <h1>Products</h1>
    <!--Чтобы роуторы заработали нужно в корневой элемент вставить тег router-view-->
    <router-view></router-view>
    <div class="row">
      <div class="col col-sm-4" v-for = 'product in products' :key = 'product.id_product'>
          <router-link tag = "h3" :to="'/products/' + product.id_product">
            <a>{{product.title}}</a>
          </router-link>
          <div>{{product.price}}</div>
          <button @click = 'addToCart(product.id_product)' class="btn btn-primary"
          v-if = 'isCart(product.id_product)'>Add to cart</button>
          <button v-else @click = 'removeFromCart(product.id_product)' class="btn btn-warning">Remove to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {

  created() {
     console.log('created');
     //this.$store.dispatch('products/loadItems');
  },
  computed: {
    ...mapGetters('products', {
      products: 'items'
    }),
    ...mapGetters('cart', {
      inCart: 'products'
    })
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    }),
    isCart(id) {
      if(this.inCart.indexOf(id) === -1) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>
  .row {
    padding-left: 15px;
  }
</style>
