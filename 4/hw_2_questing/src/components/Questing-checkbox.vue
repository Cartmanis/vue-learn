<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <answer v-for = '(answer, index) in answers' :key = 'index'
    :type = 'type' :answer = 'answer' :index = 'index'  :value = 'answer'
    v-model= 'checkAnswers[index]' @change-questing = 'onChangeQuesting($event, index)'>></answer><!--$event - это параметр,
     переданный из дочернего комонента, который сгенерировал событие change-questing-->
    <!--<div class = 'form-group' v-for = '(answer, index) in answers' :key ='index'>
      <label>
        <input :type = "type" :value = 'answer' v-model = 'checkAnswers[index]'>
        {{answer}}
      </label>      
    </div> -->
    <button type='button' @click="onClickButton" class="btn btn-success" :disabled= 'flagDisabled'>Send Data</button>
  </div>
</template>

<script>
import Answer from './Answer'
export default {
  components: {
    'answer': Answer    
  },
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
      checkAnswers: [false, false, false, false],
      flagDisabled: true
    }
  },
  methods: {
    onClickButton() {
      this.$emit('get-answer', this.checkAnswers, 'show-result');      
    },
    onChangeQuesting(event, index) {
        this.checkAnswers[index] = event;//newValue - параметр, переданный из дочернего компонента

         for(let i=0; i < this.checkAnswers.length; i++) {
          if(this.checkAnswers[i]) {
            this.flagDisabled = false;
            return;
          }          
        }
        this.flagDisabled = true;
        
    }
  }
}
</script>

