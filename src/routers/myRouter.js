import Vue from 'vue'
import VueRouter from 'vue-router'
import rt1 from './router/rt1'


Vue.use(VueRouter)

const baseRoutes = [];
const routes = baseRoutes.concat(rt1);

const router1 = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router1