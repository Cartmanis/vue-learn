<template> <!--В этом файле App.vue описан ровно один компонент, который является корневым. Тут находится html код компонента-->
          <!--и тут же содержиться экзэмпляр Vue.js -->
  <div class = 'wrapper'>
        <div id = 'app'>
          <app-header></app-header>
          <app-form></app-form>
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
        'info'
      ])
    }
  }
</script>

<style>

</style>
