import { createRouter, createWebHistory } from 'vue-router';
import HistoryView from '../views/HistoryView.vue';
import PhysicsView from '../views/PhysicsView.vue';
import MainPage from '../views/MainPage.vue';
import OnePointOneSegment from '../views/OnePointOneSegment.vue';
import SubjectEvaluation from '../views/SubjectEvaluation.vue';
import UndergraduateMajor from '../views/UndergraduateMajor.vue';
import JuniorCollegeMajor from '../views/JuniorCollegeMajor.vue';
import BaoKaoDanView from '../views/BaoKaoDanView.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/history', component: HistoryView },
  { path: '/physics', component: PhysicsView },
  { path: '/main', component: BaoKaoDanView },
  { path: '/one-point-one-segment', component: OnePointOneSegment },
  { path: '/subject-evaluation', component: SubjectEvaluation },
  { path: '/undergraduate-major', component: UndergraduateMajor },
  { path: '/junior-college-major', component: JuniorCollegeMajor },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
