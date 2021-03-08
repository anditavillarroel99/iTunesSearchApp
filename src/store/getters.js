" use strict";

const get_collection = state => {
  return state.collection;
};

const search_query = state => {
  return state.Query;
};

const initial_query = state => {
  return state.initialQuery;
};

const is_loading = state => {
  return state.isLoading;
};

const page_type = state => {
  return state.pageType;
};

const search_failed = state => {
  return state.searchFailed;
};

export default {
  get_collection,
  search_query,
  initial_query,
  is_loading,
  page_type,
  search_failed
};
