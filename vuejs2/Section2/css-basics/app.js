document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            attachRed: false, 
            color: 'green'
        },
        computed: {
            divClasses() {
                return {
                    red: this.attachRed,
                    blue: !this.attachRed
                };
            }
        }
    });
});