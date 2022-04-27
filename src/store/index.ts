import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    incrementCount(state: { count: number }) {
      state.count++;
    },
    resetCount(state: { count: number }) {
      state.count = 0;
    },
  },
});

export default store;
