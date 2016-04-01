  var STORAGE_KEY = 'favedBooks'

  export default {
    fetch: function () {
      return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save: function (favorites) {
      window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(favorites))
    }
  }
