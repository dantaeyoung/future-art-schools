<template>
  <div class="patterns">

    <div class="pattern" v-for="(record, name) in patternsByName" v-bind:key="record.id" :id="toAnchorSlug(name)">

      <div class="pattern_name">{{ name }}</div>

      <div v-for="p in record.fields['Groups']" class="related-groups" :key="p">
        <router-link :to="{ name: 'GroupsView', hash: '#' + toAnchorSlug(lookupGroup(p).fields['Name']) }">
          {{ lookupGroup(p).fields['Name'] }}
        </router-link>
      </div>

      <div
        class="fieldpattern"
        v-for="fieldname in Object.keys(record.fields)"
        :key="fieldname"
      >
      <template v-if="fieldname != 'Name' && fieldname != 'Groups'">

        <div class="label">{{ fieldname }} </div>

        <div :class="fieldname">  {{ record.fields[fieldname] }} </div>

      </template>
      </div>

    </div>
  </div>
</template>

<script>

import groupsAndPatternsMixins from '@/mixins/groupsAndPatternsMixins.js'

export default {
  name: "PatternsView",
  data() {
    return {};
  },
  mixins: [groupsAndPatternsMixins],
  components: {
  },
  methods: {
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


.pattern {
  padding: 20px;
  border: 2px dashed black;
  margin-bottom: 20px;

  &.anchorlinked {
    background-color: white;
  }

}

.fieldpattern {
  margin-bottom: 10px;
}

.pattern_name {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>
