 export default {
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
   methods: {
      toAnchorSlug(str) {
        return str.trim().replace(/\s+/g, '-').replace(/[^\w\s]/gi, '').toLowerCase();
      },
    lookupPattern(idorname) {
      if(idorname in this.patterns) {
        return this.patterns[idorname]
      }
      if(idorname in this.patternsByName) {
        return this.patternsByName[idorname]
      }
    },
    lookupGroup(idorname) {
      if(idorname in this.groups) {
        return this.groups[idorname]
      }
      if(idorname in this.groupsByName) {
        return this.groupsByName[idorname]
      }
    },
  },
  mounted() {
    if(this.$route.hash) {
      const el = document.querySelector(this.$route.hash)
      el && el.classList.add("anchorlinked");
      el && el.scrollIntoView()
    }
  }
}
