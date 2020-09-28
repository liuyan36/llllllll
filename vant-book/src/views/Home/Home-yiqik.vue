<template>
  <div class="HomeFamtasy">
    <van-tabs>
      <van-tab>
        <div class="home-box">已经拥有 {{this.categories}} 本</div>
      </van-tab>
    </van-tabs>
    <scroll class="centent">
      <van-grid :column-num="2">
        <van-grid-item v-for="(item, index) in books" :key="index">
          <div class="grid-box">
            <div class="grid-title">{{cutTitle(item.title)}}</div>
            <div class="grid-author">({{item.author}})</div>
            <div class="grid-text">{{cutTitle(item.shortIntro)}}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </scroll>
  </div>
</template>

<script>
import { getHomeListj } from "../../api/home";
import Scroll from "../../components/scroll/Scroll";
export default {
  name: "HomeHaoping",
  data() {
    return {
      categories: '',
      books: []
    };
  },
  components: {
    Scroll
  },
  created() {
    this.getHomeListj();
  },
  methods: {
    getHomeListj() {
      getHomeListj().then(res => {
        console.log(res);
        this.books = res.data.ranking.books;
        this.categories = res.data.ranking.books.length
      });
    },
    cutTitle(title) {
      if (title.length >= 5) {
        return title.substring(0, 5) + "...";
      } else {
        return title;
      }
    },
    cutTitle(shortIntro) {
      if (shortIntro.length >= 9) {
        return shortIntro.substring(0, 9) + "...";
      } else {
        return shortIntro;
      }
    }
  }
};
</script>


<style scoped>
.home-box {
  height: 50px;
  color: #ffffff;
  line-height: 50px;
  border: 1px solid;
  text-align: center;
  background-color: #cccccc;
}

.centent {
  overflow: hidden;
  position: absolute;
  top: 190px;
  bottom: 43px;
  left: 0;
  right: 0;
}
.grid-box {
  width: 100%;
  text-align: center;
  border: 1px solid #cccccb;
  background-color: #cccc;
}

.grid-title {
  color: #02a774;
}

.grid-author {
  font-size: 13px;
  color: red;
}

.grid-text {
  font-size: 10px;
  margin-top: 10px;
}
</style>
