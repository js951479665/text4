import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/xiao'
  },
  {
    path: '/xiao',
    component: () => import(/* webpackChunkName: "about" */ '../views/xiao.vue')
  },
  {
    path: '/lian',
    component: () => import(/* webpackChunkName: "about" */ '../views/lian.vue')
  }
  ,
  {
    path: '/kong',
    component: () => import(/* webpackChunkName: "about" */ '../views/kong.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
