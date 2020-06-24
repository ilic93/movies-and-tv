import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Shows from '../views/Shows.vue'
import Selected from '../views/Selected.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/tv-shows',
    name: 'shows',
    component: Shows
  },
  {
    path: '/selected/:type/:id',
    name: 'selected',
    component: Selected
  }
]

const router = new VueRouter({
  routes
})

export default router
