<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <div class = 'form-group' v-for = '(answer, index) in answers' :key ='index'>
      <label for = 'answer'>{{answer}}</label>
      <input type = 'typ' id = 'answer' value = 'typ'>
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
    typ: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },
}
</script>

