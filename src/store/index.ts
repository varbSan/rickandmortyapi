import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      characters: [],
    };
  },
  mutations: {
    incrementCount(state: { count: number }) {
      state.count++;
    },
    resetCount(state: { count: number }) {
      state.count = 0;
    },
    setCharacters(state: { characters: Record<string, unknown>[] }, payload) {
      payload.results.forEach((character: Record<string, unknown>) => {
        state.characters.push(character);
      });
    },
  },

  actions: {
    async fetchRickAndMortyAPI(context) {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        context.commit("setCharacters", json);
      } else {
        console.error("fetching API error");
      }
    },
  },
});

export default store;
