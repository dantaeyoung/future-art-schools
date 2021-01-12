<template>
  <div class="nav">
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
}

</style>

