<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <recommond></recommond>
  </div>
</template>

<script>
import Fastclick from 'fastclick'
import MHeader from 'components/m-header/header'
import Tab from 'components/tab/tab'
import Recommond from 'components/recommond/recommond'

Fastclick.attach(document.body);

export default {
  name: 'app',
  components: {
    MHeader,
    Tab,
    Recommond
  }
}
</script>

<style lang="less">
@import "~common/varible";
// body{
//   background-color:@colorBackground;
// }
*{
    margin:0;
    padding:0;
}
</style>
