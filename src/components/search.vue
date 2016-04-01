<template>
  <input type="text" v-model="query" @keyup.enter="search()" placeholder="请输入你需要找的书"/>
  <ul class="clearfix">
    <li v-for="book in books">
      <div class="img" style="background-image:url({{book.image}})">

      </div>
      <a v-link="{ path: '/books/' + book.id }" class="title">
        {{book.title}}
      </a>
      <fav :bookid="book.id" :booktitle="book.title"></fav>
    </li>
  </ul>
</template>
<style>
*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.clearfix {
  overflow: auto;
  zoom: 1;
  padding:0;
  }
  ul li{
    display:block;
    float:left;
    width:23%;
    border:none;
    height:330px;
    margin:20px 1%;
    box-shadow: 5px 5px 5px #ccc;
    border:1px solid #ccc;
  }
  ul li:hover{
    border:1px solid #f00;
  }
  .img{
    width:95%;
    height:220px;
    margin:10px 2.5%;
    background-size:cover;
  }
  .title{
    display:block;
    text-decoration:none;
    font-size:12px;
    width:100%;
    height:30px;
    text-align:center;
    color:#000;
    cursor:pointer;
    padding:0 10px;
    border:none;
  }
  input[type="text"]{
      width:100%;
      height:35px;
      line-height:35px;
      margin-top:10px;
      font-size:14px;
      padding:0 10px;
  }
</style>
<script>
import Fav from './faved.vue'

export default {
  data: function () {
    return {
      query: '',
      books: []
    }
  },
  components: {
    Fav
  },
  methods: {
    search: function () {
      var self = this
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=' + this.query).then(
        function (data) {
          self.books = data.data.books
          console.log(data.data.books)
        },
        function () {
          console.log('fail')
        }
      )
    }
  }
}
</script>
