<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>


import VHeader from "./components/v-header";

export default {
  name: 'App',
  components: {
    VHeader
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
