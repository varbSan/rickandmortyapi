<script setup lang="ts">
import CharacterCard from "@/components/CharacterCard.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onUpdated, computed } from "vue";

const route = useRoute();
const store = useStore();

const routeId = computed(() => {
  return route.params.id;
});

const fetchRickAndMortyAPI = (payload) => {
  store.dispatch("fetchRickAndMortyAPI", payload);
};

onUpdated(() => {
  console.log("routePayload", routeId);
  fetchRickAndMortyAPI({ id: routeId.value });
});

const character = computed(() => {
  return store.state.characters.find(
    (character) => character.id === Number(route.params.id)
  );
});

console.log(routeId.value);
</script>

<template>
  <CharacterCard :imageWidth="'400'" :iconWidth="'50'" :character="character" />
</template>
