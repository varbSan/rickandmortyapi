import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      characters: [],
      filter: ["Alive", "unknown", "Dead"],
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
      state.characters = payload.results;
    },
    setFilter(state: { filter: string[] }, payload) {
      state.filter = [];
      if (payload.filter.Alive) state.filter.push("Alive");
      if (payload.filter.unknown) state.filter.push("unknown");
      if (payload.filter.Dead) state.filter.push("Dead");
    },
  },

  actions: {
    async fetchRickAndMortyAPI(context, payload) {
      if (payload) {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${payload.input}`
        );

        if (response.ok) {
          const json = await response.json();
          context.commit("setCharacters", json);
          context.commit("setFilter", payload);
        } else {
          console.error("fetching API error");
        }
      } else {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character`
        );
        if (response.ok) {
          const json = await response.json();
          context.commit("setCharacters", json);
        } else {
          console.error("fetching API error");
        }
      }
    },
  },
});

export default store;
