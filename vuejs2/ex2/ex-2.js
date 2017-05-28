'use strict';
document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded!');
    new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function (event) {
                console.log(event);
                alert(`${event.target.outerHTML} was clicked!`);
            },
            updateValue: function (event) {
                this.value = event.target.value;
            }
        }
    });

});