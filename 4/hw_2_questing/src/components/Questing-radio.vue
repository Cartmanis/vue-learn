<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <div class = 'form-group' v-for = '(answer, index) in answers' :key ='index'>
      <label for = 'answer'>{{answer}}</label>
      <input :type = "type" id = 'answer' name= 'name' :value = 'answer' @change= "onChange(index, $event)">
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
      
    }
  },
  methods: {
    onChange(index, e) {
      this.$emit('change-answer-radio', index, e.target.value);      
    }
  }
}
</script>

