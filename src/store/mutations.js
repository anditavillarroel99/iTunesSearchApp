" use strict";

const mutateQuery = (state, newQuery) => {
  state.Query.push(newQuery);
};
export default {
  mutateQuery
};
