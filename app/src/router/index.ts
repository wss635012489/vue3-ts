import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '@v/home/Index.vue')
  },
  {
    path: '/abous',
    name: 'abous',
    component: () => import(/* webpackChunkName: "about" */ '@v/home/Abous.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
