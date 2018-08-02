<template>
  <div id="app">
    <transition mode = 'out-in'
                  leave-active-class = 'animated bounceOutDown'
                  enter-active-class = 'animated bounceInDown'>
      <questing-radio v-if = "currentQuestitng === '1'"></questing-radio>
      <questing-checkbox v-if = "currentQuestitng === '2'"></questing-checkbox>
      <result v-if = "currentQuestitng === 'result'" ></result>
    </transition>
  </div>
</template>

<script>
import QuestingRadio from './components/Questing-radio'
import QuestingCheckbox from './components/Questing-check'
import Result from './components/Result.vue'
import {mapGetters} from 'vuex'

export default {

 components: {
   'questing-radio': QuestingRadio,
   'questing-checkbox': QuestingCheckbox,
   'result' : Result
 },
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'info',
      'currentQuestitng'
    ])
  }
}
</script>

<style>
  #app{
    width: 500px;
    margin: 0 auto;
  }
</style>
