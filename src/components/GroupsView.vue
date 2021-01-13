<template>
  <div class="hello">

      <div class="group" v-for="record in groups" v-bind:key="record.id" :id="toAnchorSlug(record.fields['Name'])">
        <div class="group_name">{{ record.fields["Name"] }}</div>
        <div
          class="fieldgroup"
          v-for="field in Object.keys(record.fields)"
          :key="field"
        >
        <template v-if="field != 'Name'">

          <div class="label">{{ field }} </div>

          <template v-if="field == 'Patterns'">
            <div v-for="p in record.fields['Patterns']" :class="field" :key="p">
              <router-link :to="{ name: 'PatternsView', hash: '#' + toAnchorSlug(lookupPattern(p).fields['Name']) }"> {{ lookupPattern(p).fields['Name'] }} </router-link>
            </div>
          </template>
          <template v-else>
          <div :class="field">  {{ findAndReplaceReference(record.fields[field]) }} </div>
          </template>

        </template>
        </div>


    </div>
  </div>
</template>

<script>

import hyperlinkTools from '@/mixins/hyperlinkTools.js'

export default {
  name: "GroupsView",
  data() {
    return {};
  },
  mixins: [hyperlinkTools],
  components: {
  },
  methods: {
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
  border: 2px solid black;
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
