document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            link: 'http://google.com'
        },
        methods: {
            changeLink() {
                this.link = 'http://apple.com'
            }
        }
    });
});