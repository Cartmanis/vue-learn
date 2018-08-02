<template>
<form @submit.prevent = 'onChangeShowData'>
      <div class="progress">
          <div class="progress-bar" role="progressbar" v-bind:style = 'progressWidth'></div>
      </div>
      <app-input v-for ='(item, index) in info' :key = 'index'
      :name = 'item.name' :value.sync = 'item.value' :pattern = 'item.pattern'
        @update:value = "(val) => item.value = val"
        @change-status = 'onChangeData(index, $event)'>
      </app-input>
      <hr>
      <button ref = 'btn' class ='btn btn-primary' :disabled = 'disabledButton'>Send Data</button>
</form>
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
      'changeStatus',
      'showData'
    ]),
    onChangeData(index, status) {
         this.$store.commit('changeStatus', {
           index: index,
           status: status
        })
    },
    onChangeShowData() {
      this.$refs.btn.innerHTML = '...Loading';
      this.$store.dispatch('loadData', this.$refs.btn); //action - асинхронная операция
    }
  },

  computed: {
    ...mapGetters([
      'info',
      'validCnt'
    ]),
     //Свойство возвращает количество успешно заполненны полей в процентах для progressBar, используя свойство done
    progressWidth() {
      const step = 100 / this.info.length;
      return `width:${this.validCnt * step}%`;
    },
    disabledButton() {
        return this.validCnt < this.info.length
    }
  }
}
</script>

