<template>
  <div class="left">
    <img :src="movie.image" width="100%">
  </div>
  <div class="right">
    <div class="media">
      <p class="media-left">电影名:</p>
      <p class="media-body">{{movie.alt_title}} ({{movie.title}})</p>
    </div>
    <div class="media">
      <p class="media-left">评分:</p>
      <p class="media-body">{{movie.rating.average}}</p>
    </div>
    <div class="media">
      <p class="media-left">标签：</p>
      <p class="media-body">
        <span v-for="tag in movie.tags" class="name">{{tag.name}}</span>
      </p>
    </div>
    <div class="media">
      <p class="media-left">主演：</p>
      <P class="media-body">
        <span v-for="cast in casts" class="name">{{cast}}</span>
      </P>
    </div>
    <div class="media">
      <p class="media-left">电影简介：</p>
      <p class="media-body">{{movie.summary}}</p>
    </div>

    <div class="media">
      <p class="media-left"></p>
      <div class="media-body">
        <fav :movieid="movie.id" :movietitle="movie.title"></fav>
        <a v-link="{ path: '/movies' }">
          <button type="button" class="btn">返回</button>
        </a>
      </div>
    </div>
  </div>
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

  p {
    color: #EAEAEA;
    padding: 0 0 10px 0;
    line-height: 1.8;
  }

  .media .media-left {
    width: 90px;
    display: table-cell;
  }

  .media .media-body {
    display: table-cell;
  }

  .cover {
    width: 20%;
    height: auto;
  }

  .name {
    padding: 0 20px 0 0;
  }
</style>
<script>
  import Fav from './faved.vue'
  export default {
    data: function () {
      return {
        msg: '',
        movie: {},
        myfavorites: [],
        casts: []
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
                  self.casts = data.data.attrs.cast
                  console.log(self.$get('movie'))
                },
                function () {
                }
        )
      }
    }
  }
</script>
