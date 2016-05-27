import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import Favorites from './components/faved'
import Movies from './components/search'
import Movie from './components/movie'
import Home from './components/home'

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
  '/movies': {
    component: Movies
  },
  '/movies/:movie_id': {
    component: Movie
  }
})
router.start(App, 'app')
