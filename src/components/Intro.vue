<template>
  <div class="about">

    <div class="entries">
      <div class="entry" v-for="record in interviews" v-bind:key="record.id">
        <div :id="record.id" > {{ record.id }}</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "About",
  data() {
    return {};
  },
  components: {
  },
  computed: {
    interviews() {
      return this.$store.getters.interviews;
    },
    allFields() {
      try { 
        return Object.keys(this.interviews[0].fields)
      } catch {
        return []
      }
    },
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: row;
  margin: 10vh 10vw;
}


</style>

