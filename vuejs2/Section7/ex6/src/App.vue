<template>
    <!--When making custom component tags, don't use typical HTML5 tag names (like <footer>)-->
    <div class="container">
        <pageHeader></pageHeader>
        <hr>
        <div class="row">
            <server-list></server-list>
            <serverDetails></serverDetails>
        </div>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script>

import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';
import ServerDetails from './components/server/ServerDetails.vue';
import ServerList from './components/server/ServerList.vue';

export default {
    components: {
        // We can also camel-case our keys
        pageHeader: Header,
        'page-footer': Footer,
        // Also, using es6 we can do this:
        ServerDetails,
        'server-list': ServerList
    }
}

</script>

<style>

</style>
