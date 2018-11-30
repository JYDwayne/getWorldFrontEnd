<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name : 'app',
  components: {
    HelloWorld
  }
} 

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.imgDiv{
  width: 100px;
  height: 100px;
  border:solid 1px red;
  background-image: url(./assets/logo.png);
  background-size: 100% 100%;
}
</style>


