import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import dashboard from "./views/admin/dashboard";
import usersList from "./views/admin/users/list";
import userForm from "./views/admin/users/form";

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/dashboard',
            name: 'admin.dashboard',
            component: dashboard,
        },
        {
            path: '/users',
            name: 'admin.users',
            component: usersList,
        },
        {
            path: '/user/create',
            name: 'admin.user.create',
            component: userForm,
        }
    ]
});

export default router;
