<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      {{item.major}}
      <div v-if="index === 0" v-for="(item, index) in data" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // activeName: "first",
      list: [],
      data: {}
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
      // console.log(this.list);
    });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>