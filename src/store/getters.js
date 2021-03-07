" use strict";

const get_albums = state => {
  return state.albums;
};

const get_tv_shows = state => {
  return state.TvShows;
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

const get_album_tracks = state => {
  return state.albumTracks;
};

export default {
  get_albums,
  get_tv_shows,
  search_query,
  initial_query,
  is_loading,
  page_type,
  search_failed,
  get_album_tracks
};
