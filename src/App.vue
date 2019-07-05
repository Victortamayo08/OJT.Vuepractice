<template>
  <div id="app">
    <div id="nav">
      <router-link to="/page1">Page 1</router-link> |
      <router-link to="/page2">Page 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Header from './Quiz/Header.vue'
  import QBox from './Quiz/QBox.vue'

  export default {
    name: 'app',
    components: {
      Header,
      QBox
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
