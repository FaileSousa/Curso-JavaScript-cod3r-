import Vue from 'vue'
import VueRouter from 'vue-router'

import NHome from '@/components/home/NHome'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'
import NAuth from '@/components/auth/NAuth'

import { userkey } from '../config/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: NHome
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
}, {
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articleById',
    path: '/article/:id',
    component: ArticleById
}, {
    name: 'NAuth',
    path: '/auth',
    component: NAuth
}]

 const router = new VueRouter({
    mode: 'history',
    routes
}) 

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userkey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next(({ path: '/'}))
    } else {
        next()
    }
})

export default router