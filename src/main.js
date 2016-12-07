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
    component: Home,
    title: '我的电影合集'
  },
  '/favorites': {
    component: Favorites
  },
  '/movies/:movie_id': {
    component: Movie,
    title: '电影详情'
  },
  '/collect': {
    component: Collect,
    title: '我的收藏'
  }
})
router.start(App, 'app')
router.beforeEach(function (transition) {
  window.scrollTo(0, 0)
  transition.next()
})
router.afterEach(function (transition) {
  if (transition.to.title) {
    document.title = transition.to.title
    console.log(document.title)
  }
})
