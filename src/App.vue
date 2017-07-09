<template>
  <div id="app">
    <header class="header">
      <nav>
        <router-link to="/home">home</router-link>
        <router-link to="/portfolio">portfolio</router-link>
        <router-link to="/skills">skills</router-link>
        <router-link to="/contact">contact</router-link>
      </nav>

    </header>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>


  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss" scoped>
  @import 'assets/style/main.scss';
</style>
