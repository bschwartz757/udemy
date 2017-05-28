document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            counter: 0,
            x: 0,
            y: 0
        },
        methods: {
            increase: function(step, event) {
                this.counter += step;
                // Use event object here to access DOM elements (if desired)
                event.target.nextElementSibling.style.backgroundColor = 'red';
            },
            updateCoordinates: function(event) {
            // Native event object is accessible thru any v-on binding
                this.x = event.clientX;
                this.y = event.clientY;
            },
            dummy: function(event) {
                // Call native methods available on event object directly
                event.stopPropagation();
            }
        }
    });
});