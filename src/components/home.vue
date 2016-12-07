<template>
  <div class="head v-cloak">
    <a v-link="{ path: '/collect' }" class="home"><i class="iconfont">&#xe629;</i></a>
    <input type="text" v-model="query" placeholder="请输入你需要找的电影" class="input"/>
    <a class="search" @click="search()"><i class="iconfont">&#xe612;</i></a>
  </div>
  <ul class="list">
    <item v-for="movie in movies" :item="movie"  class="clearfix"></item>
  </ul>
  <Loading v-show ="loading"></Loading>
</template>
<style>
  .head {
    width: 100%;
    height: 4rem;
    padding: .5rem 0;
    background: #00d4b4;
    display: -webkit-box;
    display: -webkit-flex;

    display: -moz-box;
    display: -moz-flex;

    display: -ms-flexbox;
    display: flex;

    /* 水平居中*/
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-pack: center; /* IE 10 */

    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center; /* IE 11+,Firefox 22+,Chrome 29+,Opera 12.1*/

    /* 垂直居中 */
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-align: center; /* IE 10 */

    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
  }
  .list{
    width: 100%;
    padding-top: 4rem;
  }
  .head{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .home, .search {
    display: block;
    width: 10%;
    flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    -webkit-flex-box: 1;
    text-align: center;
    text-decoration: none;
  }

  .input {
    display: block;
    width: 80%;
    flex: 8;
    box-flex: 8;
    -webkit-flex: 8;
    -webkit-flex-box: 8;
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
    margin: 2rem 0;
    color: #D8D0D0;
  }

  .left {
    width: 35%;
    padding: 0 1rem;
    float: left;
  }

  .right {
    width: 65%;
    float: left;
    padding: 0 1rem;
  }

  .right .time, .right .info {
    display: block;
    font-size: 1.4rem;
    color: #333;
    padding-top: .5rem;
  }

  /*ul li:hover {*/
  /*border: 1px solid #f00;*/
  /*}*/

  .title {
    display: block;
    text-decoration: none;
    font-size: 1.4rem;
    width: 100%;
    cursor: pointer;
    border: none;
    color: #333;
    line-height: 1.5;
  }

  input[type="text"] {
    width: 100%;
    height: 3rem;
    line-height: 2rem;
    font-size: 1.4rem;
    padding: 0 .5rem;
    outline: none;
    border: 1px solid #fff;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #fff;
  }

  input:-moz-placeholder, textarea:-moz-placeholder {
    color: #fff;
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #ff;
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #fff;
  }
</style>
<script>
  import Item from './item.vue'
  import Loading from './loading.vue'
  export default {
    data () {
      return {
        movies: [],
        favorite: true,
        loading: true,
        message: '我的电影合集'
      }
    },
    components: {
      Item,
      Loading
    },
    created: function () {
      var self = this
      self.loading = true
      this.$http.jsonp('https://api.douban.com/v2/movie/top250').then(
        function (data) {
          self.movies = data.data.subjects
          console.log(data.data)
          self.loading = false
        },
        function () {
          console.log('fail')
        }
      )
    },
    methods: {
      search: function () {
        var self = this
        self.loading = true
        this.$http.jsonp('https://api.douban.com/v2/movie/search?q=' + self.query).then(
          function (data) {
            self.movies = data.data.subjects
            console.log(data.data.subjects)
            self.loading = false
          },
          function () {
            console.log('fail')
          }
        )
      }
    }
  }
</script>
