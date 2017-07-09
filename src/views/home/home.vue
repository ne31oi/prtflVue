<template>
  <div class="home section">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'home'
      }
    }
  }
</script>
<style lang="scss">
  .home{
    background: red;
  }

</style>
