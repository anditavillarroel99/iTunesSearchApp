" use strict";
import { Snackbar } from "buefy/dist/components/snackbar";

const mutate_query = (state, newQuery) => {
  state.Query.push(newQuery);
};
const set_search_query = (state, query) => {
  state.pageType = "search";
  state.searchQuery = query;
};

const clear_search = state => {
  state.albums = [];
  state.Query = "";
};

const search_failed = (state, action) => {
  state.searchFailed = action;
};

const is_loading = (state, action) => {
  state.isLoading = action;
};

const set_album = (state, data) => {
  state.albums = data;
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
  mutate_query,
  clear_search,
  search_failed,
  is_loading,
  set_album,
  set_page_type,
  set_search_query,
  application_error
};
