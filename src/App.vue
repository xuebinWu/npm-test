<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <top-bar>hhhhhhhhhhhhh</top-bar>
    <title-wrapper>hhhhhhhhhhhhh</title-wrapper>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TopBar from './components/TopBar.vue'
import TitleWrapper from './components/TitleWrapper.vue'

export default {
  name: 'App',
  components: {
    TopBar, TitleWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
