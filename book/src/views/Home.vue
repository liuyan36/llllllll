<template>
  <div class="home">
    <div class="home-box">
      <div
        class="home-text"
        v-for="(item, index) in list"
        :key="index"
        :class="{active: index === activeIndex }"
        @click="btnClick(index)"
      >{{item.major}}</div>
    </div>
    <div class="home-list">
      <HomeText></HomeText>
      <div v-if="this.activeIndex === 0">
        <div class="Home-subclassification">
          <div v-for="(item, index) in data" :key="index" @activeIndex="activeIndex(index)">{{item}}</div>
        </div>
      </div>
      <HomeGender></HomeGender>
    </div>
  </div>
</template>

<script>
import HomeText from "./branch/Home-text";
import HomeGender from "./branch/Home-gender";

export default {
  name: "Home",
  data() {
    return {
      list: [],
      activeIndex: 0,
      data: []
    };
  },
  components: {
    HomeText,
    HomeGender
  },
  created() {
    this.$axios("/api/cats/lv2").then(res => {
      console.log(res);
      this.list = res.data.male;
      // console.log(this.list);
    });
    this.$axios("/api/cats/lv2").then(res => {
      this.subList = res.data.male;
      let subArray = [];
      for (var i = 0; i < res.data.male.length; i++) {
        var subsList = res.data.male[i].mins;
        subArray.push(subsList);
      }
      this.data = subArray;
      console.log(this.data);
    });
  },
  methods: {
    btnClick(index) {
      // console.log(index)
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.home-box {
  height: 50px;
  display: flex;
  text-align: center;
  border: 1px solid #cccccc;
  justify-content: space-around;
}
.home-text {
  width: 6%;
  cursor: pointer;
  font-size: 12px;
  line-height: 50px;
}
.active {
  color: #ffffff;
  font-size: 17px;
  background-color: rgb(243, 71, 23);
  border-bottom: 1px solid red;
}
.home-list {
  display: flex;
}
</style>