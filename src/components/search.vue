<template>
  <div class="clearfix btn-group">
    <a v-link="{ path: '/' }" class="btnn m2">首页</a>
    <input type="text" v-model="query" @keyup.enter="search()" placeholder="请输入你需要找的电影"/>
  </div>
  <ul class="clearfix">
    <li v-for="movie in movies" class="clearfix">
      <!--<div class="img" style="background-image:url({{}})">-->

      <!--</div>-->
      <div class="left">
        <img :src="movie.images.large" alt="电影海报" width="100%">
      </div>
      <div class="right">
        <a v-link="{ path: '/movies/' + movie.id }" class="title">
          <h2>{{movie.title}}({{movie.original_title}})</h2>
        </a>
        <h5>{{movie.year}}</h5>
        <p>{{movie.summary}}</p>
        <fav :movieid="movie.id" :movietitle="movie.title"></fav>
      </div>
    </li>
  </ul>
</template>
<style>
</style>
<script>
  import Fav from './faved.vue'
  export default {
    data: function () {
      return {
        query: '',
        movies: []
      }
    },
    components: {
      Fav
    },
    created: function () {
      var self = this
      this.$http.jsonp('https://api.douban.com/v2/movie/top250').then(
              function (data) {
                self.movies = data.data.subjects
                console.log(data.data)
              },
              function () {
                console.log('fail')
              }
      )
    },
    methods: {
      search: function () {
        var self = this
        this.$http.jsonp('https://api.douban.com/v2/movie/search?q=' + this.query).then(
                function (data) {
                  self.movies = data.data.subjects
                  console.log(data.data.subjects)
                },
                function () {
                  console.log('fail')
                }
        )
      }
    }
  }
</script>
