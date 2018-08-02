<template>
  <header class="container">
    <div class="row">
      <div class="col col-sm-12">
        <h1>Site</h1>
        <div v-if = 'formSubmited'>Hello, {{name}}</div>
        <hr>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'name',
      'formSubmited'
    ])
  }
}
</script>

