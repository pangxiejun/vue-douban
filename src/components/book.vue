
<template>
    <p>{{msg}}</p>
    <p>
      <img src="{{book.image}}">
    </p>
    <p>书名:{{book.title}}</p>
    <p>
      <span>标签：</span>  <span v-for="tag in book.tags">{{tag.name}}&nbsp;&nbsp;&nbsp;</span>
    </p>
    <div class="btn-box">
      <fav :bookid="book.id" :booktitle="book.title"></fav>
    </div>
    <p>简介：{{book.summary}}</p>
    <p>出版社：{{book.publisher}}</p>
</template>
<style>
  .btn-box{
    width:30%;
  }
  .btn-m{
    margin:10px 25%;
  }
  img{
    display:block;
    max-width:100%;
    height:auto;
    padding:20px 0;
  }
</style>
<script>
import Fav from './faved.vue'

export default {
  data: function () {
    return {
      msg: '',
      book: {},
      myfavorites: []
    }
  },
  components: {
    Fav
  },
  methods: {
    fav: function (book_id, book_title) {
      // var self = this
      this.myfavorites.push({ book_id: book_id, book_title: book_title })
      // console.log(JSON.stringify({book_id, book_title}))
      window.localStorage.setItem('favedBooks', window.JSON.stringify({book_id, book_title}))
    },
    cancel_fav: function (book_id) {
      console.log('hi' + book_id)
      // this->msg = localStorage.getItem(book_id)
    }
  },
  route: {
    data: function () {
      var self = this
      return this.$http.jsonp('https://api.douban.com/v2/book/' + this.$route.params.book_id).then(
        function (data) {
          self.$set('book', data.data)
        },
        function () {
        }
      )
    }
  },
  ready: function () {

  }
}
</script>
