<template>
  <div id="app">
    <form>
      <questing-radio v-show = "listType === 'questing-radio' " :type = 'info[0].type' :title = 'info[0].title' 
      :answers= 'info[0].answers'  @get-answer = 'onChangeAnswerRadio'
      ></questing-radio>      
      <questing-checkbox v-show ="listType ==='questing-checkbox'" :type = 'info[1].type' :title ='info[1].title' 
      :answers = 'info[1].answers' @get-answer = 'onChangeAnswerCheckbox'
      ></questing-checkbox>
    </form>
    <table>
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
