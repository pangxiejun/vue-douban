<template>
  <ul class="clearfix">
    <li v-for="movie in movies" class="clearfix">
      <div class="left">
        <img :src="movie.movieimage" alt="" width="100%">
      </div>
      <div class="right">
        <a v-link="{ path: '/movies/' + movie.movieid }" class="title">
          {{movie.movietitle}}
        </a>
        <fav :movieid="movie.movieid" :movietitle="movie.movietitle" :movieimage="movie.movieimage" :favorite="movie.isExist">
        </fav>
      </div>
    </li>
  </ul>
  <div class="tips" v-show="tips">
    <p class="icon">
      <i class="iconfont">&#xe63e;</i>
    </p>
    <p class="text">你还没有收藏任何电影哦!</p>
    <a href="#" v-link="{path:'/'}" class="link">前往收藏</a>
  </div>
</template>
<style type="text/css">
  .tips{
    width: 100%;
    height: auto;
    padding-top: 4rem;
  }
  .icon{
    text-align: center;
  }
  .icon .iconfont{
    color: #999;
    font-size: 8rem;
  }
  .tips .text,.tips .link{
    display: block;
    font-size: 1.4rem;
    color: #999;
    text-align: center;
  }
  .tips .text{
     padding: 2rem 0 1rem 0;
  }
</style>
<script type="text/javascript">
  import Fav from './faved.vue'
  import Store from './../store.js'
  export default {
    data () {
      return {
        movies: [],
        isExist: true,
        tips: false
      }
    },
    components: {
      Fav
    },
    created: function () {
      this.movies = Store.fetch()
      if (this.movies.length <= 0) {
        this.tips = true
      }
      console.log(this.movies)
      for (var i = 0; i < this.movies.length; i++) {
        this.movies[i].isExist = true
      }
    }
  }
</script>
