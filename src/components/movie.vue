<template>
  <p>{{msg}}</p>
  <p>
    <img :src="movie.images.large">
  </p>
  <p>书名:{{movie.title}}</p>
  <p>
    <span>标签：</span> <span v-for="tag in movie.tags">{{tag.name}}&nbsp;&nbsp;&nbsp;</span>
  </p>
  <div class="btn-box">
    <fav :movieid="movie.id" :movietitle="movie.title"></fav>
  </div>
  <p>简介：{{movie.summary}}</p>
  <p>出版社：{{movie.publisher}}</p>
</template>
<style>
  .btn-box {
    width: 30%;
  }

  .btn-m {
    margin: 10px 25%;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    padding: 20px 0;
  }
</style>
<script>
  import Fav from './faved.vue'
  export default {
    data: function () {
      return {
        msg: '',
        movie: {},
        myfavorites: []
      }
    },
    components: {
      Fav
    },
    methods: {
      fav: function (movieid, movietitle) {
        // var self = this
        this.myfavorites.push({movie_id: movieid, movie_title: movietitle})
        // console.log(JSON.stringify({movie_id, movie_title}))
        window.localStorage.setItem('favedmovies', window.JSON.stringify({movieid, movietitle}))
      },
      cancel_fav: function (movieid) {
        console.log('hi' + movieid)
        // this->msg = localStorage.getItem(movie_id)
      }
    },
    route: {
      data: function () {
        var self = this
        return this.$http.jsonp('https://api.douban.com/v2/movie/' + this.$route.params.movie_id).then(
                function (data) {
                  self.$set('movie', data.data)
                },
                function () {
                }
        )
      }
    }
  }
</script>
