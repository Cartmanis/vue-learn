<template>
<form @submit.prevent = 'onSubmit' v-if = "!formSubmited">
      <div class="progress">
          <div class="progress-bar" role="progressbar" v-bind:style = 'progressWidth'></div>
      </div>
      <app-input v-for ='(item, index) in info' :key = 'index'
      :name = 'item.name' :value = 'item.value' :pattern = 'item.pattern'
        @update:value = "onChangeValue(index, $event)"
        @change-status = 'onChangeStatus(index, $event)'>
      </app-input>
      <hr>
      <button ref = 'btn' class ='btn' :class = 'btnClass'
      :disabled = 'disabledButton'>{{btnText}}</button>
</form>
<table v-else class ='table table-bordered'>
                <caption>All Done!</caption>
                <tbody>
                  <tr v-for = '(item, index) in info' :key ='index'>
                      <td>{{item.name}}</td>
                      <td>{{item.value}}</td>
                  </tr>
                </tbody>
            </table>
</template>

<script>
import AppInput from './Input';
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  components: {
      'app-input' : AppInput
  },
  methods: {
    ...mapMutations([
      'setInfoStatus',
      'setInfoValue'
    ]),
    onChangeStatus(index, status) {
         this.$store.commit('setInfoStatus', {
           index: index,
           status: status
        })
    },
    onChangeValue(index,value) {
        this.$store.commit('setInfoValue', {
          i: index,
          val: value
        })
    },
    onSubmit() {
      this.$refs.btn.innerHTML = '...Loading';
      this.$store.dispatch('formSubmited'); //action - асинхронная операция
    }
  },

  computed: {
    ...mapGetters([
      'info',
      'validCnt',
      'formSubmited',
      'formProccess'
    ]),
     //Свойство возвращает количество успешно заполненны полей в процентах для progressBar, используя свойство done
    progressWidth() {
      const step = 100 / this.info.length;
      return `width:${this.validCnt * step}%`;
    },
    disabledButton() {
        return this.validCnt < this.info.length
    },
    btnClass() {
      return this.formProccess ? 'btn-default' : 'btn-primary';
    },
    btnText() {
      return this.formProccess ? 'Loading...' : 'Send Data';
    }
  }
}
</script>

