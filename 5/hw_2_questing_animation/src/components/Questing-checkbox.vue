<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <!--с использованием дополнительного компонента под ответ- answer -->
    <!--<answer v-for = '(answer, index) in answers' :key = 'index'
    :type = 'type' :answer = 'answer' :index = 'index'  :value = 'answer'
    v-model= 'checkAnswers[index]' @change-questing = 'onChangeQuesting($event, index)'>></answer>--><!--$event - это параметр,
     переданный из дочернего комонента, который сгенерировал событие change-questing-->

     <!--С использованием без дополнительного компонента под ответ -->
    <div class = 'form-group' v-for = '(answer, index) in answers' :key ='index'>
      <label>
        <input :type = "type" class="form-check-input" :value = 'answer' v-model = 'checkAnswers[index]'>
        {{answer}}
      </label>      
    </div> 
    <button type='button' @click="onClickButton" class="btn btn-success" :disabled= 'disabledButton'>Send Data</button>
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
    }
  },
  methods: {
    onClickButton() {
      this.$emit('get-answer', this.checkAnswers, 'show-result');      
    },

    //event - параметр, переданный из дочернего компонента
    onChangeQuesting(event, index) {
        //this.checkAnswers[index] = event; //Если использовать такой вид изменения массива, то массив будет не реактивиен
        // и изменения в computed свойтсве disabledButton не будут фиксировться, хотя при этом сам массив будет изменяться
        this.$set(this.checkAnswers, index, event); //Вот правильное изменение массива, где данные массивы будут реактивно
        //синхронизоваться с изменениями во всем приложении
    }
  },
  computed: {
    //в данном computed массив не реактивен, пришлось придумывать другое решение...
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

