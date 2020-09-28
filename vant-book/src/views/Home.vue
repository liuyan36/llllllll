<template>
  <div class="home">
    <van-nav-bar title="书城" class="nav-bar" />
    <div class="tab">
       <div class="tab-item">
        <router-link to="/home/zuire" replace>最热榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/haoping" replace>好评榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/resou" replace>热搜榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/qianli" replace>潜力榜</router-link>
      </div>
       <div class="tab-item">
        <router-link to="/home/liucun" replace>留存榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/vip" replace>VIP榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/shengdan" replace>圣诞榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/baidu" replace>百度榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/zhangyue" replace>掌阅榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/shuqi" replace>书旗榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/yiqik" replace>17K榜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/home/qidian" replace>起点榜</router-link>
      </div>
    </div>
    <!-- 
    -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import { getHomeId } from "../api/home";

// import HomeFantasy from '../views/Home/Home-Fantasy'

export default {
  name: "Home",
  data() {
    return {
      categories: [],
      activeKey: 0,
      activeKeys: 0
    };
  },
  components: {
    // HomeFantasy
  },
  created() {
    this.getHomeId();
  },
  methods: {
    getHomeId() {
      getHomeId().then(res => {
        console.log(res);
      });
    },

    tabClick(index) {
      this.activeKey = index;
      console.log(index);
    },
    cutTitle(title) {
      if (title.length >= 5) {
        return title.substring(0, 5) + "...";
      } else {
        return title;
      }
    },
    btnClick(index) {
      this.activeKeys = index;
      console.log(index);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home {
  height: 100vh;
}

.nav-bar {
  background-color: burlywood;
}

.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);

  // bottom-border-1px;
  .tab-item {
    float: left;
    width: 16.6666667%;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);

    a {
      display: block;
      position: relative;

      &.router-link-active {
        color: #02a774;

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 35px;
          height: 2px;
          transform: translateX(-50%);
          background: #02a774;
        }
      }
    }
  }
}

/* .home-btn {
  background-color: ;
} */
</style>