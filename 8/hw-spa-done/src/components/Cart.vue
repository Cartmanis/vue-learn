<template>

  <div>
    <h1>Cart</h1>
    <hr>
    <div v-if = 'empty' class="alert alert-warning">Your cart is empty</div>
    <template v-else>
      <table class ='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Удаление</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for = 'product in products' :key = 'product.id_product' >
            <td>{{product.title}}</td>
            <td>{{product.price}}</td>
            <td><button class = 'btn btn-warning'
            @click = 'removeFromCart(product.id_product)'>
              Удалить из корзины</button></td>
          </tr>
        </tbody>
      </table>
      <button @click = 'onOrder' class="btn btn-success">Order Now</button>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {mapActions} from 'vuex';
export default {

  computed: {
    ...mapGetters('cart', {
        cartList: 'products'
    }),
    ...mapGetters('products', {
        productsList: 'items'
    }),
    products() {
      return this.productsList.filter((elem) => {
          return this.cartList.indexOf(elem.id_product) !== -1;
      });
    },
    empty() {
      return this.products.length === 0;
    }
  },
  methods: {
    onOrder() {
      this.$router.push('/checkout'); //Переходим в маршрут /checkout
    },
    ...mapActions('cart', {
      removeFromCart: 'remove'
    })
  }
}
</script>

