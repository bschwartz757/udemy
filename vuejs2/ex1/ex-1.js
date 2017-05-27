document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: '#exercise',
        data: {
            name: 'Blake Schwartz',
            age: '36',
            imageSrc: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/dachshund-puppies/dachshund-puppy-11.jpg'
        },
        methods: {
           printNameAndAge: function() {
               return `${this.name} - ${this.age}`;
           },
           randomFloat: function() {
               return Math.random() * (100 - 1);
           }
        }
    })
});