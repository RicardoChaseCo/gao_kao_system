import { createRouter, createWebHistory } from 'vue-router';
import HistoryView from '../views/HistoryView.vue';
import PhysicsView from '../views/PhysicsView.vue';
import MainPage from '../views/MainPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/history', component: HistoryView },
  { path: '/physics', component: PhysicsView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
