<template>
  <div class="groups">

    <div class="group" v-for="(record, name) in groupsByName" v-bind:key="record.id" :id="toAnchorSlug(name)">

      <div class="group_name">{{ name }}</div>

      <div v-for="p in record.fields['Patterns']" class="patterns" :key="p">
        <router-link :to="{ name: 'PatternsView', hash: '#' + toAnchorSlug(lookupPattern(p).fields['Name']) }">
          {{ lookupPattern(p) }}
        </router-link>
      </div>

      <div
        class="fieldgroup"
        v-for="fieldname in Object.keys(record.fields)"
        :key="fieldname"
      >
        <template v-if="fieldname != 'Name' && fieldname != 'Patterns'">

          <div class="label">{{ fieldname }} </div>

          <div :class="fieldname">{{ findAndReplaceReference(record.fields[fieldname]) }} </div>

        </template>
      </div>


    </div>
  </div>
</template>

<script>

import groupsAndPatternsMixins from '@/mixins/groupsAndPatternsMixins.js'

export default {
  name: "GroupsView",
  data() {
    return {};
  },
  mixins: [groupsAndPatternsMixins],
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

.groups {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}




.group {
  width: 40%;
  max-width: 500px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;

  .group_name {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .fieldgroup {
    margin-bottom: 10px;
  }

  .label {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: bold;
  }

  &.anchorlinked {
    background-color: white;
  }
}


</style>
