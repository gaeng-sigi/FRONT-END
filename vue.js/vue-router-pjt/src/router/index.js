import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroView from '../views/IntroView.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingView from '../views/RenderingView.vue'
import EventClick from '../views/EventClick.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/intro",
    name: "intros",
    component: IntroView,
  },

  {
    path: "/databindinglist",
    name: "databindinglist",
    component: DataBindingList,
  },

  {
    path: "/rendering",
    name: "rendering",
    component: RenderingView,
  },

  {
    path: "/eventclick",
    name: "eventclick",
    component: EventClick
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router // 미들 웨어? 중간에 위치한 소프트웨어
