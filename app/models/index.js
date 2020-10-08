export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload;
    },
    decrement(state, payload) {
      return state - payload;
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch.count.increment(payload);
    },
    async decrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch.count.decrement(payload);
    },
  }),
};
