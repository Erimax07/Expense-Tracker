import { createRouter, createWebHistory } from 'vue-router'
import Describtion from '../views/Describtion.vue'
import edditTransaction from '@/views/edditTransaction.vue'
import Transactions from '@/views/Transactions.vue'
import EdditTransaction from '@/views/edditTransaction.vue'
import Dashboard from '@/views/Dashboard.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/Transactions',
      name: 'Transactions',
      component: Transactions,
    },
    {
      path: '/Describtion',
      name: 'home',
      component: Describtion,
    },
    {
      path: '/EdditTransaction',
      name: 'EdditPosition',
      component: EdditTransaction,
    },
    
  ],
})

export default router
