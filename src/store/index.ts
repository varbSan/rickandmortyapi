import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      characters: [],
      filter: ["Alive", "unknown", "Dead"],
      page: 1,
    };
  },
  mutations: {
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
        if (payload.input) {
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
        } else if (payload.pageNumber) {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${payload.pageNumber}`
          );

          if (response.ok) {
            const json = await response.json();
            context.commit("setCharacters", json);
            console.log(payload.pageNumber);
          } else {
            console.error("fetching API error");
          }
        } else if (payload.id) {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/${payload.id}`
          );

          console.log(payload.id);
          if (response.ok) {
            const json = await response.json();
            context.commit("setCharacters", json);
            context.commit("setFilter", payload);
          } else {
            console.error("fetching API error");
          }
        }
      } else {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character`
        );
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          context.commit("setCharacters", json);
        } else {
          console.error("fetching API error");
        }
      }
    },
  },
});

export default store;
