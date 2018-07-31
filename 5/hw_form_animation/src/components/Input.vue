<template>

    <div class = 'form-group'>
        <label for ='name'>{{name}}</label>
        <transition
                    enter-active-class = 'animated flash'
                    leave-active-class="animated flash">
          <span class = 'fa' :class = 'setClassValid' v-if = 'true'></span>
        </transition>
        <input type = 'text' id = 'name' class ='form-control'
        :value = 'value' v-on:input ='onInput'>
    </div>
</template>
<script>
  export default {
    props: ['name', 'value', 'pattern'],
    data() {
        return {
            activated: this.value != ''
        }
    },
    computed: {
        isValid() {
            return this.pattern.test(this.value);
        },
        setClassValid() {
            console.log("setClassValid");
            if(!this.activated) {
                return '';
            }
            return this.isValid ?
            'fa-check-circle text-success':
            'fa-exclamation-circle text-danger';
        }
    },
    methods: {
      onInput(e) {
          this.activated = true;
          //Для корректной работы sync в родительском компоненте, генерируем событие с именем 'update:value' (обязательное имя)
          //и передаем само value: e.target.value
          this.$emit('update:value',e.target.value);
      }
    },
    watch: {
        //Watch следит за переменной и при изменении computed isValid вызывается событие 'change-status' где мы изменяем
        //валидацию поля. То есть происходит изменении валидации в родителе, только при изменеии в ребенке
        isValid() {
            this.$emit('change-status', this.isValid);
        }
    },
    mounted() {
        this.$emit('change-status', this.isValid);
    }
  }
</script>

<style>

</style>

