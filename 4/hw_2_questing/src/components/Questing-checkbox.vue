<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <div class = 'form-group' v-for = '(answer, index) in answers' :key ='index'>
      <label for = 'answer'>{{answer}}</label>
      <input :type = "type" id = 'answer' :value = 'answer' @change= "onChange(index, $event)" v-model = 'checkAnswers[index]'>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title : {
       type: String,
       required: true
    },
    type: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      checkAnswers: [false, false, false, false]
    }
  },
  methods: {
    onChange(index, e) {
      this.$emit('change-answer-checkbox', this.checkAnswers);      
    }
  }
}
</script>

