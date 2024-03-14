import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'about',
        path: '/about',
        component: About
      },
      {
        name: 'contact',
        path: '/contact',
        component: Contact
      },
  ]
})

export default router
