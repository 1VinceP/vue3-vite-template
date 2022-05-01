import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const setTitle = title => (to, from, next) => {
   document.title = title;
   next();
};

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: setTitle('Home'),
   },
];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;
