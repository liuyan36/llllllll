<template>
  <div class="HomeText">
    <div class="Home-list" v-for="(item, index) in text" :key="index" 
          @click="textClick(index)" :class="{active: index === textIndex}">
          {{item.name}}
          </div>
  </div>
</template>

<script>
export default {
  name: "HomeText",
  data() {
    return {
        text: [],
        textIndex: 0
    };
  },
  created() {
    this.$axios("/api/cats/lv2/statistics").then(res => {
      // console.log(res);
      this.text = res.data.female;
      // console.log(this.text);
    });
  },
  methods: {
      textClick(index) {
          // console.log(index)
          this.textIndex = index
      }
  }
};
</script>

<style scoped>
.HomeText {
  width: 20%;
  height: 300px;
  margin-top: 1%;
  cursor: pointer;
  text-align: center;
  border: 1px solid #cccccc;
}
.Home-list {
    width: 43%;
    height: 34px;
    font-size: 12px;
    float: left;
    line-height: 34px;
    margin: 3%;
    border: 1px solid #cccccc;
}
.active {
  color: #ffffff;
  font-size: 15px;
  background-color: rgb(255,105,180);
  border-bottom: 1px solid #cccccc;
}
</style>
