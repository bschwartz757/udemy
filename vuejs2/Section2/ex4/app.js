document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#exercise',
    data: {
      attachHighlight: true,
      attachShrink: false,
      color: 'blue',
      width: 'wide',
      height: 'tall',
      userClass: '',
      addedClasses: '',
      userStyle: {
        width: '150px',
        height: '100px',
        backgroundColor: 'teal'
      },
      progressBar: {
        x: 0,
        y: '50px'
      },
    },
    computed: {
      progressBarWidth() {
        return {
          width: `${this.progressBar.x}px`
        };
      }
    },
    methods: {
      startEffect: function () {
        var se = this;
        setInterval(function () {
          return se.attachHighlight = !se.attachHighlight,
            se.attachShrink = !se.attachShrink;
        }, 1000);
      },
      addClasses($event) {
        var value = $event.target.value;
        return (/true/.test(value)) ? this.addedClasses = value : this.addedClasses = '';
      },
      startProgress: function () {
        var sp = this;
        var spInterval = setInterval(function () {
          if (sp.progressBar.x >= 1000) {
            clearInterval(spInterval);
            var sprt = sp;
            setTimeout(function () {
              return sprt.progressBar.x = 0;
            }, 750);
          } else {
            return sp.progressBar.x += 100
          }
        }, 500);
      }
    }
  });

});