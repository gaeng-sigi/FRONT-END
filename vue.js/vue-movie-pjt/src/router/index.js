import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import BoxOfficeByDay from '../views/BoxOfficeByDay';

const routes = [
  {
    path: "/",
    name: "name",
    component: Home
  },

  {
    path: "/BoxOfficeByDay",
    name: "BoxOfficeByDay",
    component: BoxOfficeByDay
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
