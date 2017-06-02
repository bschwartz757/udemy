<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<!-- IMPORTANT: Any styles we add in one component are scoped globally by default;
 we need to add the 'scoped' keyword to the style tag -->
<style scoped>
    div {
        outline: 1px solid blue;
    }
</style>
