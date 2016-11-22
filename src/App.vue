<template>
    <router-view></router-view>
</template>
<style>
  body {
    width: 100%;
    min-height: 100vh;
    /*background-image: -webkit-linear-gradient(to bottom, orange, green);*/
    /*background-image: linear-gradient(to bottom, orange, green);*/
    /*background-size: 100%;*/
    /*background-repeat: no-repeat;*/
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    background: url(http://weazm-abc.qiniudn.com/abc-penny_bg.png);
    background-size: 110%;
    background-position: right center;
  }

  @media only screen and (min-width: 320px) {
    body,
    html {
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 375px) {
    body,
    html {
      font-size: 11px;
    }
  }

  @media only screen and (min-width: 414px) {
    body,
    html {
      font-size: 12px;
    }
  }

  @font-face {
    font-family: 'iconfont';  /* project id："80269" */
    src: url('//at.alicdn.com/t/font_pqt75iev0x9ftj4i.eot');
    src: url('//at.alicdn.com/t/font_pqt75iev0x9ftj4i.eot') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_pqt75iev0x9ftj4i.woff') format('woff'),
    url('//at.alicdn.com/t/font_pqt75iev0x9ftj4i.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_pqt75iev0x9ftj4i.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont";
    font-size: 1.6rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .btn-group {
    padding: 0 1rem;
  }

  .btn {
    display: block;
    padding: .75rem;
    background: #fff;
    color: #333;
    border: none;
    border-radius: 5px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-size: 1.2rem;
  }

  .btn .iconfont {
    font-size: 1.2rem;
  }

  #app {
    width: 100%;
    margin: 0 auto;
  }

  .m2 {
    margin-right: 2%;
  }

  .tc {
    text-align: center;
  }
  .head .text {
    display: block;
    width: 90%;
    flex: 9;
    box-flex: 9;
    -webkit-flex: 9;
    -webkit-flex-box: 9;
    text-align: center;
    font-size: 1.4rem;
    color: #fff;
    padding-right: 10%;
  }
</style>
