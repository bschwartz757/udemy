document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            color: 'gray',
            width: 100
        },
        computed: {
            myStyle() {
                return {
                    backgroundColor: this.color,
                    width: this.width + 'px'
                };
            }
        }
    });
});