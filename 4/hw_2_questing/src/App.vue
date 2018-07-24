<template>
  <div id="app">
      <questing
      :typ = 'info[0].type' :title = 'info[0].title' :answers= 'info[0].answers'
      >
      </questing>
  </div>
</template>

<script>
import Questing from './components/Questing.vue'

export default {

  components: {
    'questing': Questing
  },
  data () {
    return {
      info:[
        {
            typ: 'radio',
            title: 'Какой тег задаёт ссылку?',
            answers: [ 'a', 'div', 'span', 'img']
        },
        {
            typ: 'checkbox',
            title: 'Какие из этих тегов строчные?',
            answers: ['a', 'div', 'span', 'img']
        }
      ]
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style>

</style>
