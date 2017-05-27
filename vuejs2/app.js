document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            title: 'A new world',
            link: 'http://google.com'
        },
        methods: {
            changeTitle: function (event) {
                this.title = event.target.value;
            },
            sayHello: function () {
                return this.title;
            }
        }
    });
});