import { createRouter, createWebHistory, RouterView } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/files/:username/:filename",
      name: "dynamicFile",
      component: () => import("../views/DynFileView.vue"),
    },
    {
      path: "/VerificationS",
      name: "VerificationS",
      component: () => import("../views/VerificationSView.vue"),
    },
    {
      path: "/verification",
      name: "verification",
      component: () => import("../views/VerificationView.vue"),
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
  ],
});

export default router;
