<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/context/MainTabbar";

export default {
  name: "App",
  components: {
    mainTabbar: MainTabbar
  }
};
</script>
<style>
@import "./assets/common/base.css";
</style>


