<template>
  <div id="app">
    <main-tab-bar />
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"> </router-view>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"> </router-view>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/mainTabBar.vue";
export default {
  name: "App",
  components: { MainTabBar },
};
</script>

<style>
@import "assets/css/base.css";
</style>
