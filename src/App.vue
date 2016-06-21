<template>
  <div id="app">
    <h1 class="head">我的电影院</h1>
    <router-view></router-view>
</template>
<style>
  body {
    width: 100%;
    min-height: 100vh;
    background-image: -webkit-linear-gradient(to bottom, orange, green);
    background-image: linear-gradient(to bottom, orange, green);
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .head {
    height: 70px;
    line-height: 70px;
    padding: 0 20px;
    color: #EAEAEA;
  }

  .btn-group {
    padding: 0 20px;
  }

  .btnn {
    display: block;
    width: 100px;
    height: 30px;
    float: left;
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    padding: 5px;
    color: #000;
  }

  #app {
    width: 980px;
    margin: 0 auto;
  }

  .m2 {
    margin-right: 2%;
  }

  .tc {
    text-align: center;
  }

</style>
