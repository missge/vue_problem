<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div :duration="1000" :name="animationName">
        <router-view >  </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
       animationName:'fade'

    }
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
