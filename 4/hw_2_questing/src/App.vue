<template>
  <div id="app">
    <form>
      <!--Для квестов лучше использовать v-if, а не v-show, так как элементы отображаются всего один раз и не переключаются.
      v-show ререндерит сразу все компоненты и тем, которые не проходят проверку выставляет значение display: none,
      v-if ререндерит компоненты в момент выполнения условия
      А если бы вопросов было 1000 и более то они бы ререндерились бы сразу все. Это не очень быстро и не оптимально, если
      пользователь ответит всего на два вопроса из 1000, а ререндеться они будут все-->
      <questing-radio v-if = "listType === 'questing-radio' " :type = 'info[0].type' :title = 'info[0].title' 
      :answers= 'info[0].answers'  @get-answer = 'onChangeAnswerRadio'
      ></questing-radio>      
      <questing-checkbox v-if ="listType ==='questing-checkbox'" :type = 'info[1].type' :title ='info[1].title' 
      :answers = 'info[1].answers' @get-answer = 'onChangeAnswerCheckbox'
      ></questing-checkbox>
    </form>
    <table v-if = "listType ==='show-result'">
      <tr>
        <th>Вопрос</th>
        <th>Ваш ответ</th>
      </tr>
      <tr>
         <td>{{info[0].title}}</td>
         <td>{{radioAnswer}}</td>
      </tr>
      <tr>
          <td>{{info[1].title}}</td>
          <td>{{checkAnswers}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import QuestingRadio from './components/Questing-radio'
import QuestingCheckbox from './components/Questing-checkbox'

export default {

  components: {
    'questing-radio': QuestingRadio,
    'questing-checkbox': QuestingCheckbox
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
