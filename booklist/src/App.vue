<template>
  <div id="app">
    <router-view/>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from './components/mainTabbar/MainTabBar'
export default {
    name: 'App',
    components: {
      MainTabBar
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
