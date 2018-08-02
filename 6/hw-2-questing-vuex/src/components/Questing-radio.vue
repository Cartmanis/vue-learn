<template>
  <div>
    <h3>{{titleRadio}}</h3>
    <hr>

    <div class ='form-group' v-for = '(answer, index) in info[0].answers'
    :key = 'index'>
        <label class="form-check-label">
            <input :type = 'info[0].type' class = "form-check-input"
            :value = 'index' v-model = 'currentValue'>
        {{answer}}
        </label>
    </div>
      <button type='button' @click = "onClickButton" class="btn btn-success"
      :disabled= 'disabledButton'>Send Data</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      currentValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'titleRadio',
      'info'
    ]),
    disabledButton() {
      return this.currentValue === ''
    },
  },
  methods: {
    onClickButton() {
      this.$store.dispatch('setRadioAnswer', this.currentValue);
      this.$store.dispatch('changeQuesting', '2');
    }
  }
}
</script>

