<template>
  <div class="hello">

      <div class="pattern" v-for="record in patterns" v-bind:key="record.id">
        <div class="pattern_name">{{ record.fields["Name"] }}</div>
        <div
          class="fieldpattern"
          v-for="field in Object.keys(record.fields)"
          :key="field"
        >
        <template v-if="field != 'Name'">
          <div class="label">{{ field }} </div>
          <div :class="field">  {{ record.fields[field] }} </div>
        </template>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PatternsView",
  data() {
    return {};
  },
  components: {
  },
  methods: {
  },
  computed: {
    groups() {
      return this.$store.getters.groups;
    },
    patterns() {
      return this.$store.getters.patterns;
    },
    allFields() {
      try { 
        return Object.keys(this.records[0].fields)
      } catch {
        return []
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.label {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: bold;
}


.pattern {
  padding: 20px;
  border: 2px dashed black;
  margin-bottom: 20px;
}

.fieldpattern {
  margin-bottom: 10px;
}

.pattern_name {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>
