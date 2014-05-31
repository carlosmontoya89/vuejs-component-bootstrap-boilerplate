var Vue = require('vue')

Vue.config({

    // prefix for directives
    prefix: 'app',

    // log debug info
    debug: false,

    // suppress warnings
    silent: false,

    // CSS class attached for entering transition
    enterClass: 'v-enter',

    // CSS class attached for leaving transition
    leaveClass: 'v-leave',

    // Interpolate mustache bindings
    interpolate: true,

    // Interpolation delimiters
    // default value translates to {{ }} and {{{ }}}
    delimiters: ['{', '}']

});

new Vue({

    el: 'body',

    directives: {
        flip: require('./directives/flip')
    },

    filters: {
        reverse: require('./filters/reverse')
    },

    components: {
        navbar : require('navbar'),
        main: require('main'),
        footer : require('footer')
    },

    data: {
        projectTitle: 'The Project',
        value: 'this should be reversed and flipped',
        bgColor: '#f3f3f3',
        navbarContent : 'Hello, this is a default navbar content...'
    }
});