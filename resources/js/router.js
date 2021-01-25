import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import dashboard from "./views/admin/dashboard";
import usersList from "./views/admin/users/list";
import userForm from "./views/admin/users/form";
import companyList from "./views/admin/company/list";
import companyForm from "./views/admin/company/form";

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/dashboard',
            name: 'admin.dashboard',
            component: dashboard
        },
        {
            path: '/users',
            name: 'admin.users',
            component: usersList
        },
        {
            path: '/user',
            name: 'admin.user.create',
            component: userForm
        },
        {
            path: '/user/:id',
            name: 'admin.user.update',
            component: userForm
        },
        {
            path: '/companies',
            name: 'admin.company.list',
            component: companyList
        },
        {
            path: '/company',
            name: 'admin.company.create',
            component: companyForm
        },
        {
            path: '/company/:id',
            name: 'admin.company.update',
            component: companyForm
        }
    ]
});

export default router;
