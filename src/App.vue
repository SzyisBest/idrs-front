<template>
  <div id="app">
    <hello_world></hello_world>
  </div>
</template>

<script>
import hello_world from './components/view/hello_world'

export default {
  name: 'App',
  components: {
    hello_world
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
