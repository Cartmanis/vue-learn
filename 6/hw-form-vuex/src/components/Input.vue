<!-- В данном компоненте мы ничего не меняем и оставляем работу между родителем
и этим компоненте не по vuex, а по событийному подходу,
чтобы его легко можно было использоват в других компонентах-->
<template>
    <div class = 'form-group'>
        <label for ='name'>{{name}}</label>
          <span class = 'fa animated' :class = 'setClassValid' v-if = 'activated'></span>
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
            if(!this.activated) {
                return '';
            }
            return this.isValid ?
            'fa-check-circle text-success flash':
            'fa-exclamation-circle text-danger wobble';
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

