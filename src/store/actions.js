import axios from "axios";

(" use strict");

const search_collection = async ({ commit }, payload) => {
  try {
    commit("is_loading", true);
    // axios.get(`https://itunes.apple.com/search?term=${this.search}&entity=${this.entity}&limit=200&offset=${this.page * 200}`
    let { data } = await axios.get(`${payload.url}`);
    if (data.results.length === 0) {
      commit("clear_search");
      commit("search_failed", true);
      commit("is_loading", false);
    } else {
      commit("is_loading", false);
      commit("search_failed", false);
      commit("set_collection", data.results);
      commit("set_search_query", payload.query);
    }
  } catch (err) {
    commit("clear_search");
    commit("is_loading", false);
    commit("application_error", err.message);
  }
};

export default {
  search_collection
};
