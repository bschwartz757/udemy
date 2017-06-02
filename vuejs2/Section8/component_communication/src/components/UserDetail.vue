<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>Reverse Name: {{ reverseName(1) }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    // The elements we specify in the props array must match what we set up 
    // in the parent component (User.vue)
    export default {
        // Props can be an array:
        // props: ['name'],
        // Or an object:
        props: {
            // Validation - can specify multiple types - COOL!
            name: {
                type: [String, Array],
                required: true
            }
            // You can use a default value instead of 'required'
            // If default is an object, use a function
            // default: 'Blake'
        },
        // We can also export methods that are used in the parent component
        methods: {
            reverseName() {
                return this.name.split('').reverse('').join('');
            },
            resetName() {
                this.name = 'Blake';
                // We can pass a custom event to the parent component by accessing
                // the '$emit' event property of the Vue instance... We're not in 
                // jQuery land anymore
                this.$emit('nameWasReset', this.name);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>