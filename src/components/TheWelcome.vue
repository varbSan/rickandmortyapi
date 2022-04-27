<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const charactersFiltered = computed(() => {
  return store.state.characters.filter((character) => {
    return store.state.filter.find((filter) => filter === character.status);
  });
});
</script>

<template>
  <WelcomeItem v-for="character in charactersFiltered" :key="character.id">
    <template #icon>
      <img :src="character.image" width="50" style="border-radius: 6px" />
    </template>
    <template #heading>{{ character.name }}</template>
    {{ character.status }} | {{ character.species }} | {{ character.gender }}
  </WelcomeItem>
</template>
