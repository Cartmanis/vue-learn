<template>
  <div class = 'form-group'>
        <label for ='item.name'>{{item.name}}</label>
        <span class = 'fa' :class = 'setClassValid' ></span>
        <input type = 'text' id = 'item.name' class ='form-control'
        :value = 'item.value' v-on:input ='onInput'>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      activated: this.item.value != ''
    }
  },
  computed: {
    setClassValid() {
      if(!this.activated) {
          return '';
      }
      return this.item.pattern.test(this.item.value) ?
      'fa-check-circle text-success':
      'fa-exclamation-circle text-danger';
    }
  },
  methods: {
    onInput(e) {
      this.activated = true;
      console.log('onInput');
      this.$emit('field-change', {
            value: e.target.value,
            valid: this.item.pattern.test(e.target.value)
      })
    }
  }

}
</script>

<style>

</style>


