'use strict';
// Behind the scenes, Vue constructs an object (instance) from the object 
// we pass in the constructor. Vue proxies our methods and data properties 
// and handles changes for us. It provides a `watch` layer that takes care of 
// all of this automatically through getters/setters that it registers during
// creation of the Vue instance.
/* IMPORTANT: Vue is only aware of the properties and methods that we add during the constructor
call will. Properties we add later will be visible on the object, but Vue
doesn't 'know' about them */
/** We can however create objects outside the instance that we pass in the 
 * constructor as property values, such as
 * data: {
 *  prop1: value1
 * }
 */
document.addEventListener('DOMContentLoaded', function () {
  // Assign each Vue instance to a variable so we can work with them from 
  // outside

  /** COMPONENTS:
   * This will find every instance of 'hello' in the DOM and replace it with 
   * our template - thus making it reusable
   */
   Vue.component('hello', {
    template: '<h1>Hello!</h1>'
   });

  var vm1 = new Vue({
    //Can also use $mount() (see below)
    el: '#app1',
    // data: data,
    data: {
      title: 'The VueJS Instance',
      showParagraph: false
    },
    methods: {
      show: function () {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
        console.log(this.$refs);
        // We can access the element we set up a 'ref' on here, 
        // and call native methods on it
        this.$refs.myButton.innerText = 'Hello!';
      },
      updateTitle: function (title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle: function () {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title: function (value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });

  // While we can add new properties to the Vue instance from outside,
  // Vue will not be aware of them - we can't use them from within the 
  // Vue instance (although they will appear on the object if we log
  // it to the console)
  vm1.newProp = 'New';
  console.log(vm1);

  // We can access the instances from the outside using normal JS
  // methods (it's just an object)
  setTimeout(function () {
    vm1.title = 'Changed from outside both instances!';
  }, 1000);

  /* Vue instance properties (visible in console log):
  $el: the template (HTML code) of the instance
  $data: the data props/methods we set up on the instance
  $refs: references to HTML elements we can use in the Vue
  instance (or outside it)
   */
  console.log(vm1.$data.title);
  /** IMPORTANT: Changes made this way DO NOT change the Vue template
   * instance. These changes will be overwritten by the Vue template 
   * when it re-renders.
   */
  vm1.$refs.heading.innerText = 'A new heading, changed through $refs!';

  // This allows us to 'mount' a Vue instance outside the constructor (if
  // we wanted to declare the selector outside it)
  // $mount() is a built-in Vue method
  // vm1.$mount('#app1');

  // The second instance should be treated as totally separate from the 
  // first - don't try to share properties or methods between them
  // (although accessing the instance from outside is ok)
  var vm2 = new Vue({
    el: '#app2',
    data: {
      title: 'Second Instance'
    },
    methods: {
      onChange() {
        // Here, we access the first instance from inside the second.
        // Generally better to do this inside the instance you want to change,
        // but this is also possible.
        vm1.title = 'Changed this!';
      }
    }
  });

  // Alternatively, can manually create and mount Vue template
  // var vm3 = new Vue({
  //   template: '<h1>Hello!</h1>'
  // });
  // vm3.$mount('#app3');

  // We can even do this manually using vanilla JS
  // vm3.$mount();
  // document.getElementById('app3').appendChild(vm3.$el);



  var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
  });


});