document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            counter: 0,
            secondCounter: 0
        },
        // Computed: dependent properties (data props)
        // Caches results, is most efficient way to update page - should be used wherever possible
        computed: {
            // Output will only be called when the property it's bound to is updated
            // This will be called when `counter` is changed, but not when secondCounter
            // is updated
            /* DOESNT WORK FOR ASYNC TASKS */
            output: function() {
                console.log('computed');
                return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
            }
        },
        // Execute on data changes - Handles async, but not as efficient as computed
        watch: {
            // We specify which data prop to 'watch' - in this case, `counter`
            counter: function(value) {
                console.log('watch');
                // `this` is not available inside setTimeout closure - set up a ref here:
                var ct = this;
                // async task:
                setTimeout(function() {
                    console.log('clear');
                    // use ct here
                    ct.counter = 0;
                }, 2000);
            }
        },
        methods: {
            // Result will be called everytime the page needs to be updated (on change of data property)
            // Therefore, it will be less efficient than using computed props
            result() { // es6 method notation is ok
                console.log('method');
                return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
            }
        }
        /* CALL STACK: `watch` called first, `result` second, `computed` last */
    });
});