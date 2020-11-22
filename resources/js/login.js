require('./bootstrap');

import Vue from 'vue';
import App from './views/login';

const app = new Vue({
    el: '#app-login',
    components: { App }
});
