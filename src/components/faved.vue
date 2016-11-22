<template>
  <button v-show="!favorite" @click.prevent="addFav()" class="btn mt20"><i class="iconfont c-gray">
    &#xe618;</i>收藏
  </button>
  <button v-show="favorite" @click.prevent="removeFav()" class="btn mt20 c-green"><i
    class="iconfont c-green">&#xe618;</i>取消收藏
  </button>
</template>
<style>
  .c-gray {
    color: #333;
  }

  .c-green {
    color: green;
  }

  .mt20 {
    margin-top: 2rem;
  }
</style>
<script>
  import Store from './../store.js'
  var index = function (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (typeof val === 'object' && typeof arr[i] === 'object') {
        var str1 = JSON.stringify(val)
        var str2 = JSON.stringify(arr[i])
        if (str1 === str2) return i
      }
      if (arr[i] === val) return i
    }
    return -1
  }
  export default {
    props: ['movieid', 'movietitle', 'movieimage', 'favorite'],
    data () {
      return {}
    },
    methods: {
      addFav: function () {
        var movie = {
          movieid: this.movieid,
          movietitle: this.movietitle,
          movieimage: this.movieimage,
          favorite: true
        }
        var movies = Store.fetch()
        if (index(movies, movie) !== -1) {
          window.alert('你已收藏该电影')
        } else {
          console.log(movies)
          this.favorite = movie.favorite
          movie.favorite = false
          movies.push(movie)
          Store.save(movies)
        }
      },
      removeFav: function () {
        var movie = {
          movieid: this.movieid,
          movietitle: this.movietitle,
          movieimage: this.movieimage,
          favorite: false
        }
        var movies = Store.fetch()
        var i = index(movies, movie)
        if (i === -1) {
          console.log(movies)
        } else {
          this.favorite = movie.favorite
          movies.$remove(movies[i])
          Store.save(movies)
          console.log(movies)
        }
      }
    }
  }
</script>
