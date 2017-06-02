<template>
    <div class="container">
        <page-header></page-header>
        <hr>
        <div class="row">
            <server-list></server-list>
            <server-details></server-details>
        </div>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerDetails from './ServerDetails.vue';
import ServerList from './ServerList.vue';

export default {
    components: {
        'page-header': Header,
        'page-footer': Footer,
        'server-details': ServerDetails,
        'server-list': ServerList
    }
}

</script>

<style>

</style>
