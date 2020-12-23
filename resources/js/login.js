require('./bootstrap');

import Vue from 'vue';
import App from './views/login';
require('./utilities/validate');

const app = new Vue({
    el: '#app-login',
    components: { App }
});
