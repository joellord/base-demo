<template>
  <div class="contactapi">
    <button v-on:click="() => contactApi('working')">Contact Working API</button><br/>
    <button v-on:click="() => contactApi('crashing')">Contact Crashing API</button>

    <pre>
      <code class="code">
      {{ apiResponse }}
      </code>
    </pre>
  </div>
</template>

<script>
import Config from "../config.json";

export default {
  name: "ContactApi",
  data: function() {
    return {
      apiResponse: "API Response Here"
    };
  },
  methods: {
    contactApi: function(api) {
      let url = Config.WORKING_API_URL;
      if (api === "crashing") url = Config.CRASHING_API_URL;
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.apiResponse = JSON.stringify(data);
        })
        .catch(err => this.apiResponse = err);
    }
  }
}
</script>

<style scoped>
.code {
  text-align: left;
}
</style>