<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <div class = 'form-group' v-for = '(answer, index) in answers' :key ='index'>
      <label>
        <input :type = "type" :value = 'answer' v-model = 'checkAnswers[index]'>
        {{answer}}
      </label>
      
    </div>
    <button type='button' @click="onClickButton" class="btn btn-success" :disabled= 'disabledButton'>Send Data</button>
  </div>
</template>

<script>
export default {
  props: {
    title : {
       type: String,
       required: true
    },
    type: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      checkAnswers: [false, false, false, false]
    }
  },
  methods: {
    onClickButton() {
      this.$emit('get-answer', this.checkAnswers, 'show-result');      
    }
  },
  computed: {
    disabledButton() {      
      for(let i=0; i < this.checkAnswers.length; i++) {
          if(this.checkAnswers[i]) {
            return false;
          }          
        }
        return true;
    }
  }
}
</script>

