<template>
  <header class="container">
    <div class="row">
      <div class="col col-sm-12">
        <h1>Site</h1>
        <div v-if = 'showData'>Hello, {{info[0].value}}</div>
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
      'info',
      'showData'
    ])
  }
}
</script>

