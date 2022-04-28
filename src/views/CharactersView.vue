<script setup lang="ts">
import CharacterItem from "@/components/CharacterItem.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const currentPage = ref(store.state.page);

const charactersFiltered = computed(() => {
  return store.state.characters.filter((character) => {
    return store.state.filter.find((filter) => filter === character.status);
  });
});

const goToCharacterPage = (characterId) => {
  router.push({
    name: "character",
    params: { id: characterId },
  });
};

const fetchNextPage = () => {
  currentPage.value += 1;
  return fetchRickAndMortyAPI({ pageNumber: currentPage.value });
};
const fetchPreviousPage = () => {
  currentPage.value -= 1;
  return fetchRickAndMortyAPI({ pageNumber: currentPage.value });
};

const fetchRickAndMortyAPI = (payload) => {
  store.dispatch("fetchRickAndMortyAPI", payload);
};
</script>

<template>
  <main>
    <CharacterItem
      v-for="character in charactersFiltered"
      :key="character.id"
      @click="goToCharacterPage(character.id)"
    >
      <template #icon>
        <img :src="character.image" width="50" style="border-radius: 6px" />
      </template>
      <template #heading>{{ character.name }}</template>
      {{ character.status }}
    </CharacterItem>
    <button @click="fetchPreviousPage">&lt;</button> | {{ currentPage }} |
    <button @click="fetchNextPage">&gt;</button>
  </main>
</template>
