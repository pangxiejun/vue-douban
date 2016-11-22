<template>
  <li>
    <div class="left">
      <img :src="item.images.large" alt="" width="100%">
    </div>
    <div class="right">
      <a v-link="{ path: '/movies/' + item.id }" class="title">
        {{item.title}}({{item.original_title}})
      </a>
      <p class="time">{{item.year}}</p>
      <p class="info">{{item.genres}}</p>
      <fav :movieid="item.id" :movietitle="item.title" :movieimage="item.images.large" :favorite='item.isExist'></fav>
    </div>
  </li>
</template>
<script type="text/javascript">
  import Fav from './faved.vue'
  import Store from './../store.js'
  export default{
    name: 'Item',
    props: ['item'],
    components: {
      Fav
    },
    data: function () {
      return {
        isExist: true
      }
    },
    created: function () {
      var items = Store.fetch()
      for (var i = 0; i < items.length; i++) {
        if (items[i].movieid === this.item.id) {
          this.item.isExist = true
        }
      }
    }
  }
</script>
