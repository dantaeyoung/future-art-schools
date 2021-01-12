<template>
  <div class="hello">

      <div class="group" v-for="record in groups" v-bind:key="record.id">
        <div class="group_name">{{ record.fields["Name"] }}</div>
        <div
          class="fieldgroup"
          v-for="field in Object.keys(record.fields)"
          :key="field"
        >
        <template v-if="field != 'Name'">
          <div class="label">{{ field }} </div>
          <div :class="field">  {{ findAndReplaceReference(record.fields[field]) }} </div>
        </template>
        </div>


    </div>
  </div>
</template>

<script>

export default {
  name: "GroupsView",
  data() {
    return {};
  },
  components: {
  },
  methods: {
    lookupGroup(idorname) {
      if(idorname in this.groups) {
        return this.groups[idorname]
      }
      if(idorname in this.groupsByName) {
        return this.groupsByName[idorname]
      }
    },
    lookupPattern(idorname) {
      if(idorname in this.patterns) {
        return this.patterns[idorname]
      }
      if(idorname in this.patternsByName) {
        return this.patternsByName[idorname]
      }
    },
    createPatternLink(fname) {
      return fname;
//      return `<b>${fname}</b>`;
    },
    findAndReplaceReference(text) {
      if(typeof(text) === "string") {
        const found = text.match(/\[\[(.*)\]\]/);
        if(found && found.length > 1) {
          let freplace = found[0];
          let fname = found[1];
          if(fname in this.patternsByName) {
            let fnew = this.createPatternLink(fname);
            text = text.replace(freplace, fnew);
            return text;
          }
        }
      }
      return text;
    }
  },
  computed: {
    patterns() {
      return this.$store.getters.patterns;
    },
    groups() {
      return this.$store.getters.groups;
    },
    groupsByName() {
      return this.$store.getters.groupsByName;
    },
    patternsByName() {
      return this.$store.getters.patternsByName;
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


.group {
  padding: 20px;
  border: 2px dashed black;
  margin-bottom: 20px;
}

.fieldgroup {
  margin-bottom: 10px;
}

.group_name {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>
