/* eslint-disable */

const process_api_key = process.env.VUE_APP_AIRTABLE_API_KEY;
const airtable_base = process.env.VUE_APP_AIRTABLE_BASE;
const airtable_groups_table = process.env.VUE_APP_AIRTABLE_GROUPS_TABLE;
const airtable_groups_view = process.env.VUE_APP_AIRTABLE_GROUPS_VIEW;
const airtable_patterns_table = process.env.VUE_APP_AIRTABLE_PATTERNS_TABLE;
const airtable_patterns_view = process.env.VUE_APP_AIRTABLE_PATTERNS_VIEW;

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function loadAirtableData(options, callback) {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: options.apikey }).base(options.base);
  let groups = [];

  base(options.table)
    .select({
      view: options.view 
    })
    .eachPage(
      function page(partialGroups, fetchNextPage) {
        groups = [...groups, ...partialGroups];
        fetchNextPage();
      },
      function done(err) {
//        console.log("Fetched Groups", groups);
        if (err) {
          console.error(err);
          return;
        }
        callback(groups);
      }
    );
}


export default new Vuex.Store({
  state: {
    groups: [],
    patterns: [],
    hasLoaded: false,
  },
  getters: {
    groups(state) {
      return state.groups;
    },
    groupsByName(state) {
      var gbn = {};
      for(let k in state.groups) {
        let n = state.groups[k].fields["Name"]
        if(n && n != "") {
          gbn[n] = state.groups[k];
        }
      }
      return gbn;
    },
    patternsByName(state) {
      var pbn = {};
      for(let k in state.patterns) {
        let n = state.patterns[k].fields["Name"]
        if(n && n != "") {
          pbn[n] = state.patterns[k];
        }
      }
      return pbn;
    },
    patterns(state) {
      return state.patterns;
    },
  },
  mutations: {
		setGroups(state, r) {
			state.groups = r;
		},
		setPatterns(state, r) {
			state.patterns = r;
		},
  },
  actions: {
    fetchData(context) {
      if (!context.state.hasLoaded) {
        context.dispatch("fetchGroups");
        context.dispatch("fetchPatterns");
      }
    },
    fetchGroups(context) {
      loadAirtableData({
        apikey: process_api_key,
        base: airtable_base,
        table: airtable_groups_table,
        view: airtable_groups_view,
      },
        function(groupsRaw) {
        var groupsRaw = groupsRaw.filter(w => w.fields["Name"]);
        var groups = groupsRaw.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {});
        context.commit("setGroups", groups);
      });
    },
    fetchPatterns(context) {
      loadAirtableData({
        apikey: process_api_key,
        base: airtable_base,
        table: airtable_patterns_table,
        view: airtable_patterns_view,
      },
        function(patternsRaw) {
        var patternsRaw = patternsRaw.filter(w => w.fields["Name"]);
        var patterns = patternsRaw.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {});
        context.commit("setPatterns", patterns);
      });
    },
  }
});
