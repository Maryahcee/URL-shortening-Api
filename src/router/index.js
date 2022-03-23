import { createRouter, createWebHistory } from 'vue-router'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'
import Resources from '../views/Resources.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'features',
      component: Features
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
  ]
})

export default router
