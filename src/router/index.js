import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/weekly',
    component: () =>
      import(/* webpackChunkName: "Home" */ '../components/Home.vue'),
  },
  {
    path: '/weekly',
    name: 'Weekly',
    component: () =>
      import(/* webpackChunkName: "Weekly" */ '../components/Weekly.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
