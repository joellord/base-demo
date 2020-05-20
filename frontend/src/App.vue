<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ContactApi />
  </div>
</template>

<script>
import ContactApi from "./components/ContactApi.vue";

export default {
  name: "App",
  components: {
    ContactApi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
