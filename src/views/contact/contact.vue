<template>
  <div class="contact section">
    {{msg}}
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss">
  .contact{
    background: gray;
  }

</style>
