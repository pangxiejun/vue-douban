<template>
  <div id="app">
    <h1 class="tc">我的图书馆</h1>
    <div>
      <a v-link="{ path: '/' }" class="btnn m2">首页</a>
      <a v-link="{ path: '/books' }" class="btnn">搜索</a>
    </div>
    <router-view></router-view>
</template>
<style>
  .btnn{
    display:block;
    width:49%;
    height:35px;
    float:left;
    background:#fff;
    border:1px solid #ccc;
    line-height:35px;
    text-align:center;
    text-decoration: none;
    border-radius: 5px;
  }
  #app{
    width:980px;
    margin:0 auto;
  }
  .m2{
    margin-right:2%;
  }
  .tc{
    text-align:center;
  }

</style>
