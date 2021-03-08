import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const state = {
  Query: "",
  searchQuery: "",
  initialQuery: "Jack Johnson",
  collection: [],
  searchFailed: false,
  isLoading: false,
  pageType: "search",
  appError: null
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {}
});
