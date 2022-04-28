<script setup lang="ts">
import VCharacterCard from "@/components/molecules/VCharacterCard.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onUpdated, computed } from "vue";

const route = useRoute();
const store = useStore();

const routeId = computed(() => {
  return route.params.id;
});

const fetchRickAndMortyAPICharacter = (payload) => {
  store.dispatch("fetchRickAndMortyAPICharacter", payload);
};

onUpdated(() => {
  console.log("routePayload", routeId);
  fetchRickAndMortyAPICharacter({ id: routeId.value });
});

const character = computed(() => {
  return store.state.characters.find(
    (character) => character.id === Number(route.params.id)
  );
});

console.log(routeId.value);
</script>

<template>
  <VCharacterCard
    :imageWidth="'300'"
    :iconWidth="'50'"
    :character="character"
  />
</template>
