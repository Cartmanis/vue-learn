<template>
  <div>
    <h3>{{titleCheck}}</h3>
    <hr>

    <div class ='form-group' v-for = '(answer, index) in info[1].answers'
    :key = 'index'>
        <label class="form-check-label">
            <input :type = 'info[1].type' class = "form-check-input"
            :value = 'answer' v-model = 'checkAnswers[index]'>
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
      checkAnswers: [false, false, false, false]
    }
  },
  computed: {
    ...mapGetters([
      'titleCheck',
      'info'
    ]),
    disabledButton() {
      for(let i = 0; i < this.checkAnswers.length; i++) {
        if(this.checkAnswers[i]) {
          return false;
        }
      }

      return true;
    }
  },

  methods: {
    onClickButton() {
      this.$store.dispatch('setCheckAnswer', this.checkAnswers);
      this.$store.dispatch('changeQuesting', 'result');
    }
  }
}
</script>
