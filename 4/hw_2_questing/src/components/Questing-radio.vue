<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
      <answer v-for = '(answer, index) in answers' :key = 'index'
            :type = 'type' :answer = 'answer' :index = 'index' 
            v-model= 'currentValue' @change-radio = 'onChangeRadio'></answer>
      <!--<div class ='form-group' v-for = '(answer, index) in answers' :key ='index'>
        <label class="form-check-label">
            <input :type = 'type' class = "form-check-input" :value = 'index' v-model = 'currentValue'> 
        {{answer}}
        </label>                  
      </div>-->
      <button type='button' @click = "onClickButton" class="btn btn-success" :disabled= 'disabledButton'>Send Data</button>
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
      currentValue: ''
    }
  },
  methods: {
    onClickButton(){      
      //Тут вместе с результатом пробрасываем событие смены вопроса следующий вопрос
      this.$emit('get-answer', this.currentValue, 'questing-checkbox'); 
    },
    onChangeRadio(newValue) {
      this.currentValue = newValue;
      console.log(this.currentValue);
    }
  },
  computed: {
    disabledButton() {
        return this.currentValue === ''
    }
  }
}
</script>

