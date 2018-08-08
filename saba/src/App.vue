<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Test/>
    <!--<Async/>-->
    <!--<Debounce/>-->
    <!--<Prototype/>-->
    <!--<EventLoop/>-->
    <!--<HelloWorld/>-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Test from './components/Test.vue'
  import Prototype from './components/Prototype.vue'
  import Async from './components/Async.vue'
  import Debounce from './components/Debounce.vue'
  import EventLoop from './components/EventLoop.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,Test,Prototype,Async,Debounce,EventLoop
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
</style>
