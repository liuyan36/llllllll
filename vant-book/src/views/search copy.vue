<template>
  <div class="home">
    <van-nav-bar title="书城" class="nav-bar" />
    <!-- <van-tabs>
      <van-tab v-for="(item, index) in data" :title="item.name" :key="index">
        <div class="home-box">已经拥有 {{item.bookCount}} 本</div>
      </van-tab>
    </van-tabs>-->
        <van-tabs @click="tabClick">
      <van-tab v-for="(item, index) in categories" :title="item.name" :key="index">
        <div class="home-box">已经拥有 {{item.bookCount}} 本</div>
      </van-tab>
    </van-tabs>
    <div v-if="activeKey === 0" v-for="(item, index) in params.books" :key="index">
      <div>{{item.title}}</div>
    </div>
    <div class="content">
      <tab-menu :categories="categories"></tab-menu>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getHomeMultidate } from "../api/home";

import Scroll from "../components/scroll/Scroll";

export default {
  name: "Home",
  data() {
    return {
      categories: [],
      activeKey: 0
    };
  },
  components: {
    Scroll
  },
  created() {
    this.getHomeMultidate();
  },
  methods: {
    getHomeMultidate() {
      getHomeMultidate().then(res => {
        console.log(res);
        this.categories = res.data.male;
        console.log(this.categories);
        // let subArray = [];
        // for (var i = 0; i < res.data.male.length; i++) {
        //   var subsList = res.data.male[i].mins;
        //   subArray.push(subsList);
        // }
        //         this.list = subArray
        // console.log(this.list)
        // console.log(subArray)
        // this.list = subArray;
        // console.log(this.data);
      });
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
}
.nav-bar {
  background-color: burlywood;
}
.home-box {
  height: 50px;
  border: 1px solid;
  text-align: center;
  line-height: 50px;
  background-color: #cccc;
  color: #ffffff;
  font-size: 25px;
}
 .content {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }

</style>