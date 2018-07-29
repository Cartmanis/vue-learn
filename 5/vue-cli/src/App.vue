<template> <!--В этом файле App.vue описан ровно один компонент, который является корневым. Тут находится html код компонента-->
          <!--и тут же содержиться экзэмпляр Vue.js -->
  <div class = 'wrapper'>
        <div id = 'app'>
            <form v-show = '!showData'  @submit.prevent ='showData = true'>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" v-bind:style = 'progressWidth'></div>
                </div>
                <!-- sync - это синтактический сахар для события 'update:value', которое при sync генерируется автоматически
                Только нужно не забыть в дочернем компоненте Input передать это самое val через this.$emit('update:value', e.target.value)
                Получается нет необходимости подписываться на событие @field-change(как и для @update:value) для передачи параметров родителю -->
                <app-input v-for ='(item, index) in info' :key = 'index'
                :name = 'item.name' :value.sync = 'item.value' :pattern = 'item.pattern'
                 @change-status = 'onChangeData(index, $event)'
                 @update:value = "(val) => item.value = val"
                 @field-change = 'onFieldChange(index, $event)'> <!--параметры можно передавать как от родителя, то есть index, так и от детей $event - это объект data,
                                    который передается от дочернего компонента. $event - переменная формируется на лету, когда мы подисываемся на любое событие-->

                </app-input>
                <hr>
                <button class ='btn btn-primary' :disabled = 'done < info.length'>Send Data</button>
            </form>
            <table v-show ='showData' class ='table table-bordered'>
                <caption>All Done!</caption>
                <tr v-for = '(item, index) in info' :key ='index'>
                    <td>{{item.name}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </table>
        </div>
  </div>
</template>

<script>//Сам экземпляр vue
    import AppInput from './components/Input'

  export default {
    //Пример локальной регстрации собственного компонента- считается удобной и более правильной
    components: {
      'app-input' : AppInput
    },

    data() {
        return {
          info: [
              {
                  name: 'Name',
                  value: 'Slavik',
                  pattern: /^[a-zA-z ]{2,30}$/
              },
              {
                  name: 'Phone',
                  value: '12',
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
            /* this.info[index].value = data.value;
            this.controls[index] = !data.valid;
            let done = 0;
            for(let i = 0; i < this.controls.length; i++) {
                  if(!this.controls[i]) {
                      done++;
                  }
              }
              this.done = done; */
        },
        onChangeData(index, isValid) {
            console.log('isValid');
            this.controls[index] = !isValid;
            let done = 0;
            for(let i = 0; i < this.controls.length; i++) {
                  if(!this.controls[i]) {
                      done++;
                  }
              }
              this.done = done;
              console.log(this.done)
        }

    },

    beforeMount() {
        for(let i = 0; i < this.info.length; i++) {
            this.controls.push(true);
        }
    }
  }
</script>

<style scoped>/*Стили компонента */

</style>
