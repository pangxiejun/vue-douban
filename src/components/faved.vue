<template>
    <button v-if="!isFaved" @click.prevent="addFav()" class="btn btn-m">收藏</button>
    <button v-else @click.prevent="removeFav()"  class="btn btn-m">取消收藏</button>
</template>
<style>
  .btn{
    width:50%;
    height:30px;
    line-height:30px;
  }
  .btn-m{
    margin:0 25%;
  }
</style>
<script>
import Store from './../store.js'

export default {
  props: ['bookid', 'booktitle'],
  computed: {
    isFaved: function () {
      var books = Store.fetch()
      for (var i = 0; i < books.length; i++) {
        if (books[i].bookid === this.bookid) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    addFav: function () {
      var book = {
        bookid: this.bookid,
        booktitle: this.booktitle
      }
      var books = Store.fetch()
      books.push(book)
      Store.save(books)
    },
    removeFav: function () {
    }
  }
}
</script>
