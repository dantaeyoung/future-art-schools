<template>
  <div class="nav">
    <p>We are working on a report about financially sustainable cooperative art/design schools. This report is being created for the Center for Cultural Innovation’s AmbitioUS program area, created to “encourage the development of burgeoning alternative economies and fresh social contracts in ways that artists and cultural communities can achieve financial freedom.”</p>
    <a href="https://airtable.com/tblShbhbI1OXPCNm4/viw7J9Aa5DbKIpx3K?blocks=hide">Airtable</a>
    <router-link :to="{ name: 'PatternsView' }">Patterns</router-link>
    <router-link :to="{ name: 'GroupsView' }">Groups</router-link>
  </div>
</template>

<script>

export default {
  name: "Nav",
  data() {
    return {};
  },
  components: {
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
}

</style>

