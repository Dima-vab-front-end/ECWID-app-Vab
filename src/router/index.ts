import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { Enums } from '../models';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Enums.PageUrl.Home,
      name: 'home',
      component: HomeView
    },
    {
      path: Enums.PageUrl.About,
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }

    return savedPosition || { top: 0 };
  }
});

export default router;
