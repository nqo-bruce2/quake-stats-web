import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Signup from '@/components/Signup.vue'
import Players from '@/components/Players.vue'
import Coach from '@/components/Coach.vue'
import AllStats from '@/components/AllStats'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/coach',
    name: 'Coach',
    component: Coach
  },
  {
    path: '/allstats',
    name: 'AllStats',
    component: AllStats
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
