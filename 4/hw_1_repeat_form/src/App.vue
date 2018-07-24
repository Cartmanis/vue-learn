<template>
  <div class = 'wrapper'>
        <div id = 'app'>
            <form v-show = '!showData'  @submit.prevent ='showData = true'>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" v-bind:style = 'progressWidth'></div>
                </div>
                <app-input v-for = "(item, index) in info" :key = 'index'
                :item = 'item'
                 @field-change = 'onFieldChange(index, $event)'>

                </app-input>
                <hr>
                <button class ='btn btn-primary' :disabled = 'done < info.length'>Send Data</button>
            </form>
            <table v-show ='showData' class ='table table-bordered'>
                <caption>All Done!</caption>
                <tr v-for = '(item, index) in info' :key='index'>
                    <td>{{item.name}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

import AppMyInput from './components/MyInput' //Импорт компонента

export default {
  components: { //Локальная регистрация компонента
    'app-input': AppMyInput
  },
  data () {
    return {
       info: [
          {
              name: 'Name',
              value: '',
              pattern: /^[a-zA-z ]{2,30}$/
          },
          {
              name: 'Phone',
              value: '',
              pattern: /^[0-9]{7,14}$/
          },
          {
              name: 'Email',
              value: '',
              pattern: /.+@./
          },
          {
              name: 'Some Field 1',
              value: '',
              pattern: /.+/
          },
          {
              name: 'Some Field 2',
              value: '',
              pattern: /.+/
          }
      ],
      controls:[],
      done: 0,
      showData: false
    }
  },
  computed: {
  //Свойство возвращает количество успешно заполненны полей в процентах для progressBar, используя свойство done
      progressWidth() {
          const step = 100 / this.info.length;
          return `width:${this.done * step}%`;
      }
  },

  methods: {
      onFieldChange(index, data) {
          this.info[index].value = data.value;
          this.controls[index] = !data.valid;
          let done = 0;
          for(let i = 0; i < this.controls.length; i++) {
                if(!this.controls[i]) {
                    done++;
                }
            }
            this.done = done;
      }

  },

  beforeMount() {
      for(let i = 0; i < this.info.length; i++) {
          this.controls.push(true);
      }
  }

}
</script>

<style>

</style>
