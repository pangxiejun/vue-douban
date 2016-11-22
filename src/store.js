var STORAGE = 'favedmovies'

export default {
  fetch: function () {
    return window.JSON.parse(window.localStorage.getItem(STORAGE) || '[]')
  },
  save: function (favorites) {
    window.localStorage.setItem(STORAGE, window.JSON.stringify(favorites))
  }
}
