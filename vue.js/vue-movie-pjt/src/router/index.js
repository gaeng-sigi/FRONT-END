import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import BoxOfficeByDay from '../views/BoxOfficeByDay';
import BoxOfficeByWeek from '../views/BoxOfficeByWeek';
import BoxOffice from '../views/BoxOffice';

const routes = [
  {
    path: "/",
    name: "name",
    component: Home,
  },

  {
    path: "/BoxOfficeByDay",
    name: "BoxOfficeByDay",
    component: BoxOffice
  },

  {
    path: "/BoxOfficeByWeek",
    name: "BoxOfficeByWeek",
    component: BoxOffice
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  console.log('ddd');
  
  return next();
})

export default router
