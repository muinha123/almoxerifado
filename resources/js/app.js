require('./bootstrap');

import Vue from 'vue';
import App from './views/layout';
import Routes from './router';

const app = new Vue({
    el: '#main-wrapper',
    components: { App },
    router: Routes
});
