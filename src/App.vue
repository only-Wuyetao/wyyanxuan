<template>
  <div>
    <router-view/>
    <FootGuide></FootGuide>
  </div>
</template>
<script>

  import FootGuide from './components/FootGuide/FootGuide.vue'
  export default {
    name: "App",
    components: {
      FootGuide
    }
  }
</script>

<style scoped lang="stylus">

</style>
