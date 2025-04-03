import { createRouter, createWebHistory } from 'vue-router'
import Describtion from '../views/Describtion.vue'
import Dashboard from '@/views/Dashboard.vue'
import EdditPosition from '@/views/EdditPosition.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/Describtion',
      name: 'home',
      component: Describtion,
    },
    {
      path: '/EdditPosition',
      name: 'EdditPosition',
      component: EdditPosition,
    },
  ],
})

export default router
