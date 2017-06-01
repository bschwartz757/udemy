document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: '#app',
        data: {
            ingredients: ['meat', 'fruit', 'cookies'],
            persons: [
                {name: 'Blake', age: 28, color: 'blue'},
                {name: 'Stacey', age: 30, color: 'red'}
            ]
        }
    });
});