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
                <td>{{titleCheck}}</td>
                <td>{{checkAnswers}}</td>
            </tr>
          </tbody>
    </table>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'titleRadio',
      'titleCheck',
      'radioAnswer',
      'checkAnswers'
    ])
  }
}
</script>
