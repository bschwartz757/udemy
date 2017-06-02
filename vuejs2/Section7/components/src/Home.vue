<template>
    <!--We can use v-for inside templates-->
    <!--But, need to wrap it inside a div (because we can only have one root element
    inside template)-->
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
    // Import from another component file
    import ServerStatus from './ServerStatus.vue';
    export default {
        // Register component locally
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>