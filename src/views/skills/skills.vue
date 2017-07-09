<template>
  <div class="skills section">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Skills',
    data () {
      return {
        msg: 'skills'
      }
    }
  }
</script>
<style lang="scss">
  .skills{
    background: blue;
  }

</style>
