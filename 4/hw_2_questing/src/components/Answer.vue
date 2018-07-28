<template>
<div class = 'form-group'>    
    <label class="form-check-label">
        <input :type = 'type' class="form-check-input" name = 'name' :value = 'index'
         v-model = 'currentValue' @change= 'onChange'>
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
        },
        index: {
            type: Number,
            required: true,            
        }
    },

    data() {
        return {
            currentValue: ''   
        }
    },

    methods: {
        onChange() {
    // this.currentValue = true/ false для компонента Questing-radio и [false, false, false, false] для компонтента Questing-checkbox
            this.$emit('change-questing', this.currentValue); 
        }
    }
}
</script>



