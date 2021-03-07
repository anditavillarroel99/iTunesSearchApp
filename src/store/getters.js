" use strict";

const getAlbums = state => {
  return state.albums;
};

const getTvShows = state => {
  return state.TvShows;
};

export default {
  getAlbums,
  getTvShows
};
