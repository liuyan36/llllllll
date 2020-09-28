<template>
 <div>1231</div>
</template>

<script>
export default {
 name: "Helloworld",
 data(){return {}},
 created() {
   this.$axios('/api/getJoke?page=1&count=2&type=video').then(res => {
     console.log(res)
   })

 }
}
</script>

<style>

</style>
