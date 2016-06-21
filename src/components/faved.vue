<template>
  <button v-if="isFaved" @click.prevent="addFav()" class="btn">收藏</button>
  <button v-else @click.prevent="removeFav(index)" class="btn">取消收藏</button>
</template>
<style>
  .btn {
    width: 90px;
    height: 30px;
    line-height: 30px;
  }

</style>
<script>
  import Store from './../store.js'
  export default {
    props: ['movieid', 'movietitle'],
    data () {
      return {
        isFaved: true
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
        this.isFaved = false
        console.log(movies)
      },
      removeFav: function (index) {
        var movies = Store.fetch()
        movies.$remove(index)
        this.isFaved = true
        console.log(movies)
      }
    }
  }
</script>
