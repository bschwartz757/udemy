'use strict';
document.addEventListener('DOMContentLoaded', function () {

  /** LIFECYCLE EVENTS:
   * new Vue(): creates the instance
   * beforeCreate(): fired just before creation
   * -- initialize data & methods --
   * created(): once the instance i created
   * -- compile the template --
   * beforeMount(): before the template is mounted
   * -- replace selector (el) with compiled template
   * -- Mounted to DOM
   * -* On changes: *-
   * beforeUpdate(): Data has changed
   * -- Re-render DOM --
   * updated(): just before the changes are mounted to the DOM
   * beforeUpdate() & upated() become part of a cycle
   * on subsequent changes
   * beforeDestroy(): when destroying a template
   * -- Destroyed --
   * destroyed(): when the template is destroyed
   */

  new Vue({
    el: '#app',
    data: {
      title: 'The VueJS Instance Lifecycle'
    },
    beforeCreate() {
      console.log('beforeCreate()');
    },
    created() {
      console.log('created()');
    },
    beforeMount() {
      console.log('beforeMount()');
    },
    mounted() {
      console.log('mounted()');
    },
    beforeUpdate() {
      console.log('beforeUpdate()');
    },
    updated() {
      console.log('updated()');
    },
    beforeDestroyed() {
      console.log('beforeDestroyed()');
    },
    destroyed() {
      console.log('destroyed()');
    },
    methods: {
      destroy() {
        this.$destroy();
      }
    }
  });

});