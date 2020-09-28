<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
     <i  icon="home-o"></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/search" activeColor="red">
      <div slot="item-text">分类</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../tabbar/TabBar'
  import TabBarItem from '../tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
