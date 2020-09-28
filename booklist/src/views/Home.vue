<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
 import NavBar from '../components/navbar/NavBar'
 import Scroll from '../components/scroll/Scroll'
export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll
  }
}
</script>
