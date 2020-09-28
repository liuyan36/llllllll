<template>
  <div>
    <div class="Home-subclassification">
      <div v-for="(item, index) in data" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  data() {
    return {
      data: []
    };
  },
  created() {
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
  }
};
</script>

<style scoped>
.Home-subclassification {
    position: absolute;
}
</style>