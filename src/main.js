import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'

import App from './App'
import Favorites from './components/faved'
import Books from './components/search'
import Book from './components/book'

Vue.use(VueRouter)
Vue.use(Resource)
/* eslint-disable no-new */
var router = new VueRouter()
router.map({
  '/favorites': {
    component: Favorites
  },
  '/books': {
    component: Books
  },
  '/books/:book_id': {
    component: Book
  }
})

router.start(App, 'app')
