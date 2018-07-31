<template>
  <div id="app">
  <transition mode = 'out-in'
  enter-active-class= "animated jackInTheBox">
    <form v-if = "listType !== 'show-result'">
      <!--Для квестов лучше использовать v-if, а не v-show, так как элементы отображаются всего один раз и не переключаются.
      v-show ререндерит сразу все компоненты и тем, которые не проходят проверку выставляет значение display: none,
      v-if ререндерит компоненты в момент выполнения условия
      А если бы вопросов было 1000 и более то они бы ререндерились бы сразу все. Это не очень быстро и не оптимально, если
      пользователь ответит всего на два вопроса из 1000, а ререндеться они будут все-->
      <transition mode = 'out-in'
                  leave-active-class = 'animated bounceOutDown'
                  enter-active-class = 'animated bounceInDown'>
        <questing-radio v-if = "listType === 'questing-radio' " :type = 'info[0].type' :title = 'info[0].title'
        :answers= 'info[0].answers'  @get-answer = 'onChangeAnswerRadio'
        ></questing-radio>
        <questing-checkbox v-if ="listType ==='questing-checkbox'" :type = 'info[1].type' :title ='info[1].title'
        :answers = 'info[1].answers' @get-answer = 'onChangeAnswerCheckbox'
        ></questing-checkbox>
      </transition>
      </form>


    <result v-if = "listType ==='show-result'" :titleRadio = 'info[0].title'
          :titleCheckBox = 'info[1].title'
          :radioAnswer = 'radioAnswer' :checkAnswers = 'checkAnswers'>
    </result>
    </transition>

  </div>
</template>

<script>
import QuestingRadio from './components/Questing-radio'
import QuestingCheckbox from './components/Questing-checkbox'
import Result from './components/Result.vue'

export default {

  components: {
    'questing-radio': QuestingRadio,
    'questing-checkbox': QuestingCheckbox,
    'result' : Result
  },
  data () {
    return {
      info:[
        {
            type: 'radio',
            title: 'Какой тег задаёт ссылку?',
            answers: [ 'a', 'div', 'span', 'img']
        },
        {
            type: 'checkbox',
            title: 'Какие из этих тегов строчные?',
            answers: ['a', 'div', 'span', 'img']
        }
      ],
      radioAnswer: '',
      checkAnswers: [],
      listType: 'questing-radio'
    }
  },
  methods: {
    onChangeAnswerRadio(value, next) {
      this.radioAnswer = value;
      this.listType = next;
    },
     onChangeAnswerCheckbox(checkAnswers, next) {
      this.checkAnswers = checkAnswers;
      this.listType = next;
    }
  }
}
</script>

<style>

</style>
