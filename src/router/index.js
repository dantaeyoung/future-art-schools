/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

import store from '@/store';

import Nav from "@/components/Nav.vue";
import GroupsView from "@/components/GroupsView.vue";
import PatternsView from "@/components/PatternsView.vue";

Vue.use(VueRouter);

var siteName = "Vue / Vuex / Router <-> Airtable"

const routes = [
  {
    path: "/",
    redirect: "/groups",
  },
  {
    path: "/groups",
    name: "GroupsView",
    components: {
      nav: Nav,
      view: GroupsView,
    },
  },
  {
    path: "/patterns",
    name: "PatternsView",
    components: {
      nav: Nav,
      view: PatternsView,
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});


export default router;

