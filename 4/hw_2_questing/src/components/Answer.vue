<template>
<div class = 'form-group'>    
    <label class="form-check-label">
        <input :type = 'type' class="form-check-input" :value = 'answer' v-model = 'currentValue' @change= 'onChange'>
            {{answer}}
    </label>
</div>


</template>
<script>


export default {
    props: {
        type: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            currentValue: ''   
        }
    },

    methods: {
        onChange() {
            console.log(this.currentValue);
            this.$emit('change-radio', this.currentValue)
        }
    }
}
</script>



