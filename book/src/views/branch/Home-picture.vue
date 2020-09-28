<template>
  <div>
    <div class="Home-picture">
      <div class="home-title" v-for="(item, index) in PictureList" :key="index">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homepicture",
  data() {
    return {
      HotList: [],
      PictureList: [],
      subList: [],
      data: []
    };
  },
  created() {
    this.$axios("/api/ranking/gender").then(res => {
      this.HotList = res.data;
      this.PictureList = res.data.picture;
      // console.log(this.HotList);
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
    activeIndex(index) {
      console.log(index)
    }
  }
};
</script>

<style scoped>
.Home-picture {
  width: 10%;
  float: right;
  margin-top: 1%;
  margin-right: 1%;
  position: relative;
  border: 1px solid #cccccc;
}

.home-title {
  height: 34px;
  margin: 10px;

  text-align: center;
  line-height: 34px;
  font-size: 10px;
  border: 1px solid #cccccc;
}

.Home-subclassification {
  position: absolute;
}
</style>