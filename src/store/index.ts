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
    async fetchRickAndMortyAPIName(context, payload) {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${payload.input}`
        );

        const json = await response.json();
        context.commit("setCharacters", json);
        context.commit("setFilter", payload);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchRickAndMortyAPIPage(context, payload) {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${payload.pageNumber}`
        );

        const json = await response.json();
        context.commit("setCharacters", json);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchRickAndMortyAPICharacter(context, payload) {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${payload.id}`
        );

        const json = await response.json();
        context.commit("setCharacters", json);
        context.commit("setFilter", payload);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchRickAndMortyAPICharacters(context, payload) {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character`
        );
        const json = await response.json();
        console.log(json);
        context.commit("setCharacters", json);
      } catch (e) {
        console.error(e);
      }
    },
  },
});

export default store;
