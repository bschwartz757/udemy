<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!--IMPORTANT: need the colon and the attribute identifier must 
                match what we're trying to pass in the child component (UserDetail.vue)-->
                <!--@nameWasReset is a custom is a custom event we emit from the child
                component to communicate with the parent component. This is sweet.-->
                <!--$event is the custom event we emitted from the child component-->
                <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
                <!--Passing 1 here will throw a validation error (see UserDetail.vue)-->
                <!--<app-user-detail :name="1"></app-user-detail>-->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Blake'
            };
        },
        methods: {
            changeName() {
                this.name = 'Stacey'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
