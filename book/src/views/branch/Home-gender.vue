<template>
  <div class="home">
    <div  class="home-gender">
      <div
        class="home-text"
        v-for="(item, index) in femaleList"
        :key="index"
        :class="{active: index === activeIndex }"
        @click="btnClick(index)"
      >{{item.shortTitle}}</div>
    </div>
    <HomePicture></HomePicture>
  </div>
</template>

<script>
import HomePicture from "./Home-picture";
export default {
  name: "HomeGender",
  data() {
    return {
      HotList: [],
      femaleList: [],
      activeIndex: 0
    };
  },
  components: {
    HomePicture
  },
  created() {
    this.$axios("/api/ranking/gender").then(res => {
      this.HotList = res.data;
      this.femaleList = res.data.female;
      // console.log(this.HotList);
    });
  },
  methods: {
    btnClick(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
}
.home-gender {
  width: 98%;
  height: 50px;
  display: flex;
  margin-top: 1%;
  margin-left: 1%;
  text-align: center;
  border: 1px solid #cccccc;
  justify-content: space-around;
}
.home-text {
  width: 6%;
  color: #cccccc;
  cursor: pointer;
  font-size: 12px;
  line-height: 50px;
}
.active {
  color: black;
  font-size: 17px;
  border-bottom: 1px solid red;
}
</style>