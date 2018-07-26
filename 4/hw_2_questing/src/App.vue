<template>
  <div id="app">
    <form @sumbit.prevent = 'onClickButton'>
      <questing-radio :type = 'info[0].type' :title = 'info[0].title' 
      :answers= 'info[0].answers' @change-answer-radio = 'onChangeAnswerRadio'
      ></questing-radio>      
      <questing-checkbox :type = 'info[1].type' :title ='info[1].title' 
      :answers = 'info[1].answers' @change-answer-checkbox = 'onChangeAnswerCheckbox'
      ></questing-checkbox>      
      <button class="btn btn-success" :disabled= 'flag'>Send Data</button>
      <!--<component :is = 'listType' :items ='list'></component>  -->
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
      flag: true,
      showData: false
    }
  },
  methods: {
    onChangeAnswerRadio(index, value) {
      this.radioAnswer = index; 
      console.log(this.radioAnswer);     
      this.flag = false;
    },
    onChangeAnswerCheckbox(checkAnswers) {
      console.log(checkAnswers);
      this.checkAnswers = checkAnswers;
      this.flag = false;
    }
  },
  computed: {
      computedAnswer() {
        return true;
      }
  }
}
</script>

<style>

</style>
