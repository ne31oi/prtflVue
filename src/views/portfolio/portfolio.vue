<template>
  <div class="portfolio section">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Portfolio',
    data () {
      return {
        msg: 'portfolio'
      }
    }
  }
</script>
<style lang="scss">
  .portfolio{
    background: green;
  }

</style>
