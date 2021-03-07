import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const state = {
  searchQuery: "",
  Query: "",
  initialQuery: "Jack Johnson",
  albums: [],
  tvShows: [],
  movies: [],
  musicVideos: [],
  audioBooks: [],
  shortFilms: [],
  searchFailed: false,
  isLoading: false,
  language: "en_us",
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
