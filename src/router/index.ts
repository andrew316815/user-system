import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserPage from '../views/UsersPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: UserPage,
  },
  {
    path: '/chart',
    name: 'chart',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/ChartsPage.vue' ),
  },
]

const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes,
})

export default router
