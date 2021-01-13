<template>
  <div class="hello">

      <div class="pattern" v-for="record in patterns" v-bind:key="record.id" :id="toAnchorSlug(record.fields['Name'])">
        <div class="pattern_name">{{ record.fields["Name"] }}</div>
        <div
          class="fieldpattern"
          v-for="field in Object.keys(record.fields)"
          :key="field"
        >
        <template v-if="field != 'Name'">

          <div class="label">{{ field }} </div>

          <template v-if="field == 'Groups'">
            <div v-for="p in record.fields['Groups']" :class="field" :key="p">

              <router-link :to="{ name: 'GroupsView', hash: '#' + toAnchorSlug(lookupGroup(p).fields['Name']) }"> {{ lookupGroup(p).fields['Name'] }} </router-link>
            </div>
          </template>
          <template v-else>
            <div :class="field">  {{ record.fields[field] }} </div>
          </template>


        </template>
        </div>

    </div>
  </div>
</template>

<script>

import hyperlinkTools from '@/mixins/hyperlinkTools.js'

export default {
  name: "PatternsView",
  data() {
    return {};
  },
  mixins: [hyperlinkTools],
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
}

.fieldpattern {
  margin-bottom: 10px;
}

.pattern_name {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>
