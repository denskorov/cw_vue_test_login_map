import {createRouter, createWebHistory} from "vue-router";

import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage";

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home',
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'login',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")

    if (to.name !== 'login' && !token) {
        next({name: 'login'})
    }

    if (to.name === 'login' && token) {
        next({name: 'home'})
    }

    next()
})

export default router