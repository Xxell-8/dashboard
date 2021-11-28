import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Dashboard from '@/views/Dashboard.vue'
import AddData from '@/views/AddData.vue'

const routes = [
  {
    path: '/visualization',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requireData: true }
  },
  {
    path: '/',
    name: 'AddData',
    component: AddData
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.matched.some(function(routeInfo) {
    return routeInfo.meta.requireData
  })) {
    if (!store.state.data) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
