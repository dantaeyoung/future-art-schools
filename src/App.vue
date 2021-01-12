<template>
  <div id="app">
      <router-view name="nav" />
      <router-view name="view" />
  </div>
</template>

<script>


/* eslint-disable */

const process_api_key = process.env.VUE_APP_AIRTABLE_API_KEY;
const airtable_table = process.env.VUE_APP_AIRTABLE_TABLE;
const airtable_base = process.env.VUE_APP_AIRTABLE_BASE;
const airtable_view = process.env.VUE_APP_AIRTABLE_VIEW ;

console.log(process_api_key)

export default {
  name: "App",
  components: {
  },
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  methods: {
  }
};
</script>

<style>

 @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

body {
   background: rgb(190,233,255);
background: linear-gradient(90deg, rgba(190,233,255,1) 0%, rgba(255,230,246,1) 100%); 
  background-color: lightgray;
  font-family: 'Karla', sans-serif;
  margin: 0px;
  padding: 0px;
}

#app {
  color: black;
  margin-top: 60px;
  padding: 1em;
}


</style>
