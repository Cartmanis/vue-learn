<template> <!--В этом файле App.vue описан ровно один компонент, который является корневым. Тут находится html код компонента-->
          <!--и тут же содержиться экзэмпляр Vue.js -->
  <div class = 'wrapper'>
        <div id = 'app'>
          <app-header></app-header>
          <app-form v-if = '!showData'></app-form>
          <transition  mode = 'out-in' name = 'fade'
                    enter-active-class = 'animated bounceInDown'
                    leave-active-class="animated bounceOutDown">

            <table v-if = 'showData' class ='table table-bordered'>
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
    import AppForm from './components/Form'
    import Header from './components/Header'
    import {mapGetters} from 'vuex';

  export default {
    //Пример локальной регстрации собственного компонента- считается удобной и более правильной
    components: {
      'app-form' : AppForm,
      'app-header' : Header
    },
    computed: {
      ...mapGetters([
        'info',
        'showData'
      ])
    }
  }
</script>

<style>

</style>
