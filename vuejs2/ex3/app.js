document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result() {
                return this.value === 37 ? 'Done' : 'Not there yet';
            }
        },
        watch: {
            result() {
                var vl = this;
                setTimeout(function() {
                    vl.value = 0;
                }, 5000);
            }
        }
    });
});