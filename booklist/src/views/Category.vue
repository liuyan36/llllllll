<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="category">
      <div
        class="home-title"
        v-for="(item, index) in list"
        :key="index"
        :class="{active: index === activeIndex}"
        @click="majorClick(index)"
      >{{item.major}}</div>
    </div>
    <div class="category-box">
      <div v-if="this.activeIndex === 0">
        <div v-for="(item, index) in data[0]" :key="index">
          <div style="display: flex">{{item}}</div>
        </div>
      </div>
      <div v-else-if="this.activeIndex === 1">
        <div v-for="(item, index) in data[1]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 2">
        <div v-for="(item, index) in data[2]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 3">
        <div v-for="(item, index) in data[3]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 4">
        <div v-for="(item, index) in data[4]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 5">
        <div v-for="(item, index) in data[5]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 6">
        <div v-for="(item, index) in data[6]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 7">
        <div v-for="(item, index) in data[7]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 8">
        <div v-for="(item, index) in data[8]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 9">
        <div v-for="(item, index) in data[9]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 10">
        <div v-for="(item, index) in data[10]" :key="index">{{item}}</div>
      </div>
      <div v-else-if="this.activeIndex === 11">
        <div v-for="(item, index) in data[11]" :key="index">{{item}}</div>
      </div>
      <div v-if="this.activeIndex === 12">
        <div v-for="(item, index) in data[12]" :key="index">{{item}}</div>
      </div>
      <div v-else>
        <div v-for="(item, index) in data[13]" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/navbar/NavBar";
export default {
  name: "category",
  components: {
    NavBar
  },
  data() {
    return {
      list: [],
      data: [],
      activeIndex: 0
    };
  },
  created() {
    this.$axios("/api/cats/lv2").then(res => {
      console.log(res);
      this.list = res.data.male;
      let subArray = [];
      for (var i = 0; i < res.data.male.length; i++) {
        var subsList = res.data.male[i].mins;
        subArray.push(subsList);
      }
      this.data = subArray;
      console.log(this.data);
      console.log(this.list);
    });
  },
  methods: {
    majorClick(index) {
      console.log(index);
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.category {
  float: left;
}
.home-title {
  width: 100px;
  height: 44px;
  line-height: 44px;

  border: 1px solid #cccccc;
}

.active {
  color: red;
}

.centent {
  /* height: calc(100% - 54px);
    overflow: hidden; */
  overflow: hidden;

  position: absolute;
  top: 41px;
  bottom: 43px;
  left: 0;
  right: 0;
}
</style>
