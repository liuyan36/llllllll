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
body {
  margin: 0;
  padding: 0;
}
</style>
