<template>
  <!--   <img :src="movie.image" class="cover"> -->
  <div class="content">
    <div class="media">
      <p class="media-left">电影名:</p>
      <p class="media-body">{{movie.alt_title}} ({{movie.title}})</p>
    </div>
    <div class="media">
      <p class="media-left">评分:</p>
      <p class="media-body">{{average}}</p>
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
      <div class="media-body clearfix">
        <a href="#" v-link="{path:'/'}" class="btn btn-float">返回首页</a>
        <a href="#" v-link="{path:'/collect'}" class="btn btn-float">我的收藏</a>
      </div>
    </div>
  </div>
</template>
<style>
.btn-float{
  width: 45%;
  float: left;
  text-align: center;
  background: #ff0;
  color: #333;
  font-size: 1.4rem;
  text-decoration: none;
}
.btn-float:nth-child(2n+1){
  margin-right: 10%;
}
.clearfix{
  zoom: 1;
  overflow: auto;
}
  .btn-box {
    width: 30%;
  }

  .btn-m {
    margin: 1rem 25%;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    padding: 20px 0;
  }

  .media {
    padding: .5rem 0;
  }

  .media .media-left {
    font-size: 1.6rem;
    padding-bottom: 1rem;
    color: #e87f0b;
    font-weight: bold;
  }

  .media .media-body {
    /*display: table-cell;*/
    font-size: 1.4rem;
    line-height: 1.5;
    padding-bottom: .5rem;
    vertical-align: top;
  }

  .cover {
    display: block;
    width: 20%;
    margin: 1rem;
  }

  .name {
    padding: 0 1rem 0 0;
  }

  .content {
    padding:1rem;
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
        casts: [],
        average: ''
      }
    },
    components: {
      Fav
    },
    route: {
      data: function () {
        var self = this
        return this.$http.jsonp('https://api.douban.com/v2/movie/' + this.$route.params.movie_id).then(
          function (data) {
            self.$set('movie', data.data)
            self.casts = data.data.attrs.cast
            self.average = data.data.rating.average
            console.log(self.$get('movie'))
          },
          function () {
          }
        )
      }
    }
  }
</script>
