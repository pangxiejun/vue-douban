import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import Favorites from './components/faved'
import Movie from './components/movie'
import Home from './components/home'
import Collect from './components/collect'

Vue.use(VueRouter)
Vue.use(Resource)
/* eslint-disable no-new */
var router = new VueRouter()
router.map({
  '/': {
    component: Home
  },
  '/favorites': {
    component: Favorites
  },
  '/movies/:movie_id': {
    component: Movie
  },
  '/collect': {
    component: Collect
  }
})
router.start(App, 'app')
router.beforeEach(function (transition) {
  window.scrollTo(0, 0)
  transition.next()
})
