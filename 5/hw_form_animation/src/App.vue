<template> <!--В этом файле App.vue описан ровно один компонент, который является корневым. Тут находится html код компонента-->
          <!--и тут же содержиться экзэмпляр Vue.js -->
  <div class = 'wrapper'>
        <div id = 'app'>
          <transition  mode = 'out-in' name = 'fade'
                    enter-active-class = 'animated bounceInDown'
                    leave-active-class="animated bounceOutDown">
            <form v-if = '!showData'  @submit.prevent ='showData = true'>
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
            <table v-if ='showData' class ='table table-bordered'>
                <caption>All Done!</caption>
                <tbody>
                  <tr v-for = '(item, index) in info' :key ='index'>
                      <td>{{item.name}}</td>
                      <td>{{item.value}}</td>
                  </tr>
                </tbody>
            </table>
          </transition>
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
                  value: '',
                  pattern: /^[a-zA-z ]{2,30}$/
              },
              {
                  name: 'Phone',
                  value: '123121231',
                  pattern: /^[0-9]{7,14}$/
              },
              {
                  name: 'Email',
                  value: 'Mail@gmail.com',
                  pattern: /.+@./
              },
              {
                  name: 'Some Field 1',
                  value: '1',
                  pattern: /.+/
              },
              {
                  name: 'Some Field 2',
                  value: '2',
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

<style>/*Стили компонента */
  /*6 классов для создания анимации */
 .fade-enter{ /*класс задается на секунду до совершения анимации.
				 Для плавной анимации задаем начальную прозрачность равную 0 */
		opacity: 0;
	}

	.fade-enter-active{/*класс живет в течении всей анимации. Именно из active считывается время 0.5s*/
		/*transition: opacity 0.5s; */
    animation:  slideIn 0.5s;
	}

	.fade-enter-to{/* после завершения анимации еще доли секунды будет показан данный класс */
		/*opacity: 1;/*По логике тут должен быть opacity: 1, но это делать не нужно, так как у данного элемента
					и так оpacity: 1 */
	}

	.fade-leave{
		/*opacity: 1;/*По логике тут должен быть opacity: 1, но это делать не нужно, так как у данного элемента
					и так оpacity: 1 */
	}

	.fade-leave-active{/*Данный класс также живет в течении всей анимации поэтому тут указываем transition*/
		/*transition: opacity 0.5s;		*/
    animation: sliedOut 0.5s;
	}

	.fade-leave-to{
		opacity: 0;
  }

  /*анимация */
  @keyframes slideIn{
		from{transform: translateY(100vw);}
		to{transform: translateY(0px);}
	}

	@keyframes slideOut{
		from{transform: translateY(0px);}
		to{transform: translateY(-100vw);}
  }
</style>
