<template>
  <div class="clearfix btn-group">
    <a v-link="{ path: '/' }" class="btnn m2">首页</a>
    <a v-link="{ path: '/movies' }" class="btnn">搜索</a>
  </div>
  <ul class="clearfix">
    <li v-for="movie in movies" class="clearfix">
      <!--<div class="img" style="background-image:url({{}})">-->

      <!--</div>-->
      <div class="left">
        <img :src="movie.images.large" alt="" width="100%">
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
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .clearfix {
    overflow: auto;
    zoom: 1;
  }

  ul {
    width: 100%;
    height: auto;
    padding: 0;
  }

  img {
    display: block;
    padding: 0;
    box-shadow: 0px 0px 5px #1D1A1A;
  }

  ul li {
    with: 100%;
    display: block;
    border: none;
    position: relative;
    margin: 20px 0;
    color: #D8D0D0;
  }

  .left {
    width: 20%;
    padding: 0 20px;
    float: left;
  }

  .right {
    width: 80%;
    float: left;
    padding: 0 20px;
  }

  /*ul li:hover {*/
  /*border: 1px solid #f00;*/
  /*}*/

  .title {
    display: block;
    text-decoration: none;
    font-size: 12px;
    width: 100%;
    cursor: pointer;
    border: none;
    color: #D8D0D0;
  }

  input[type="text"] {
    width: 200px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding: 0 10px;
    margin-left: 10px;
    border-radius: 10px;
    outline: none;
    border: none;
  }
</style>
<script>
  import Fav from './faved.vue'
  export default {
    data: function () {
      return {
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
    }
  }
</script>
