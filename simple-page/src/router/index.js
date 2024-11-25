import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';

const routes = [
  {
    path: '/',
    code: 'index',
    name: '首页',
    component: () => import('@/view/index/index.vue'),
  },
  {
    path: '/week',
    code: 'week',
    name: '周',
    component: () => import('@/view/week/index.vue'),
  },
  {
    path: '/temperature',
    code: 'temperature record',
    name: '体温记录',
    component: () => import('@/view/temperature/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASH),
  routes: routes,
});
router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.meta.title || to.name;
  });
});

export default router;
