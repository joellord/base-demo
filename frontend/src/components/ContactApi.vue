<template>
  <div class="contactapi">
    <button v-on:click="() => contactApi('working')">Contact Working API</button><br/>
    <button v-on:click="() => contactApi('crashing')">Contact Crashing API</button>
    <button v-on:click="() => contactApi('crash')">Crash Server</button>
    <button v-on:click="() => contactApi('slow')">Slow Request</button>
    <br/><br/>
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
      if (api === "crash") url = Config.CRASHING_API_URL + "/crash";
      if (api === "slow") url = Config.CRASHING_API_URL + "/slow";
      this.apiResponse = `Request sent to ${url}`;
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.apiResponse = JSON.stringify(data, null, 4);
        })
        .catch(err => this.apiResponse = err);
    }
  }
}
</script>

<style scoped>
pre {
  text-align: left; 
  display: inline-block;
}
</style>