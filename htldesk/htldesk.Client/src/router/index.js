import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/files/:username/:filename',
      name: 'dynamicFile',
      component: () => import('../views/DynFileView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/delete',
      name: 'delete',
      component: () => import('../views/DeleteView.vue')
    },
    {
      path: '/change',
      name: 'change',
      component: () => import('../views/ChangeView.vue')
    },
    {
      path: '/create/:accountGuid',
      name: 'createentrie',
      component: () => import('../views/CreateEntryView.vue')
    },
    {
      path: '/delete/:accountGuid',
      name: 'deleteentrie',
      component: () => import('../views/DeleteEntryView.vue')
    },
    {
      path: '/create/file',
      name: 'createfile',
      component: () => import('../views/CreateFileView.vue')
    },

  ]
})

export default router

