<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <div class = 'form-group' v-for = '(answer, index) in answers' :key ='index'>
      <label for = 'answer'>{{answer}}</label>
      <input :type = "type" id = 'answer' :value = 'answer' v-model = 'checkAnswers[index]'>
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
      for(let i=0; i < this.checkAnswers; i++) {
          if(this.checkAnswers[i]) {
            return true;
          }          
        }
        return false;
    }
  }
}
</script>

