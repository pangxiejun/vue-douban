<template>
  <button v-if="!isFaved" @click.prevent="addFav()" class="btn">收藏</button>
  <button v-else @click.prevent="removeFav()" class="btn">取消收藏</button>
</template>
<style>
  .btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
  }

</style>
<script>
  import Store from './../store.js'
  export default {
    props: ['movieid', 'movietitle'],
    computed: {
      isFaved: function () {
        var movies = Store.fetch()
        for (var i = 0; i < movies.length; i++) {
          if (movies[i].movieid === this.movieid) {
            return true
          }
        }
        return false
      }
    },
    methods: {
      addFav: function () {
        var movie = {
          movieid: this.movieid,
          movietitle: this.movietitle
        }
        var movies = Store.fetch()
        movies.push(movie)
        Store.save(movies)
      },
      removeFav: function () {
      }
    }
  }
</script>
