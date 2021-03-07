" use strict";

const updateQuery = ({ commit }, newQuery) => {
  commit("mutateQuery", newQuery);
};

export default {
  updateQuery
};
