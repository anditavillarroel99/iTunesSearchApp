" use strict";
import { Snackbar } from "buefy/dist/components/snackbar";

const set_search_query = (state, query) => {
  state.pageType = "search";
  state.searchQuery = query;
};

const clear_search = state => {
  state.collection = [];
  state.Query = "";
};

const search_failed = (state, action) => {
  state.searchFailed = action;
};

const is_loading = (state, action) => {
  state.isLoading = action;
};

const set_collection = (state, data) => {
  state.collection = data;
};

const set_page_type = (state, type) => {
  if (type === "bookmarks") {
    state.searchQuery = "";
  }
  state.pageType = type;
};

const application_error = (state, message) => {
  state.appError = message;
  Snackbar.open({
    message: message,
    type: "is-danger",
    position: "is-top",
    actionText: "Reload App",
    indefinite: true,
    onAction: () => {
      window.location.reload();
    }
  });
};

export default {
  clear_search,
  search_failed,
  is_loading,
  set_collection,
  set_page_type,
  set_search_query,
  application_error
};
