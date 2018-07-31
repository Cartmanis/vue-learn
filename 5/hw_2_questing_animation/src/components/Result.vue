<template>
  <table class = 'table table-bordered'>
          <tbody>
            <tr>
              <th>Вопрос</th>
              <th>Ваш ответ</th>
            </tr>
            <tr>
              <td>{{titleRadio}}</td>
              <td>{{radioAnswer}}</td>
            </tr>
            <tr>
                <td>{{titleCheckBox}}</td>
                <td>{{checkAnswers}}</td>
            </tr>
          </tbody>
    </table>
</template>
<script>
export default {
    props: {
        titleRadio: {
            type: String,
            required: true
        },
        titleCheckBox: {
            type: String,
            required: true
        },
        radioAnswer: {
            type: Number,
            required: true
        },
        checkAnswers: {
            type: Array,
            required: true,
        }
    },
     data() {
        return {
            currentValue: ''
        }
    }
}
</script>
