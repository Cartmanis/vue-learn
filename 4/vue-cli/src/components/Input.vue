<template>
    <div class = 'form-group'>
        <label for ='name'>{{name}}</label>
        <span class = 'fa' :class = 'setClassValid' v-if = 'true'></span>
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
        setClassValid() {
            console.log("setClassValid");
            if(!this.activated) {
                return '';
            }
            return this.pattern.test(this.value) ?
            'fa-check-circle text-success':
            'fa-exclamation-circle text-danger';
        }
    },
    methods: {
      onInput(e) {
          this.activated = true;
          //параметры можно передавать как от детей, то есть тут, так и от родителей
          this.$emit('field-change',{ //этот объект - это и есть $event, который передается в родителе вместе c index и который будет data в обработчике родителя onInput
              value: e.target.value, //e.target - это сам объект input, а value - это его значение
              valid: this.pattern.test(e.target.value)  //передаем еще один параметр, который показывает валидин или нет этот компонент
          }) //генерируем свое событие, но тут мы его можем назвать и input, не смотря на то, что такое событие уже существует*/
      }
    }
  }
</script>

