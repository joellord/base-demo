<template>
  <div id="app">
    <h1>API Tester</h1>
    <h2>{{ hostname }}</h2>
    <ContactApi />
  </div>
</template>

<script>
import ContactApi from "./components/ContactApi.vue";
import Config from "./config.json";

export default {
  name: "App",
  data: function() {
    return {
      hostname: Config.HOSTNAME
    };
  },
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

h2 {
  font-size: 1.25em;
  font-style: italic;
}
</style>
