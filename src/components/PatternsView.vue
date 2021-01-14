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

          <div :class="fieldname"><vue-markdown>{{record.fields[fieldname] }} </vue-markdown></div>

      </template>
      </div>

    </div>
  </div>
</template>

<script>

import groupsAndPatternsMixins from '@/mixins/groupsAndPatternsMixins.js'
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  name: "PatternsView",
  data() {
    return {};
  },
  mixins: [groupsAndPatternsMixins],
  components: {
    VueMarkdown
  },
  methods: {
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.patterns {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


.pattern {
  width: 40%;
  max-width: 500px;
  min-width: 300px;
  padding: 20px;
  border: 3px dotted black;
  margin: 20px;
  border-radius: 10px;

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
.label {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: bold;
}

</style>
