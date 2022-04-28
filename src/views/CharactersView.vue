<script setup lang="ts">
import VCharacterItem from "@/components/atoms/VCharacterItem.vue";
import VButton from "@/components/atoms/VButton.vue";
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
  return fetchRickAndMortyAPIPage({ pageNumber: currentPage.value });
};
const fetchPreviousPage = () => {
  currentPage.value -= 1;
  return fetchRickAndMortyAPIPage({ pageNumber: currentPage.value });
};

const fetchRickAndMortyAPIPage = (payload) => {
  store.dispatch("fetchRickAndMortyAPIPage", payload);
};
</script>

<template>
  <main>
    <VCharacterItem
      v-for="character in charactersFiltered"
      :key="character.id"
      @click="goToCharacterPage(character.id)"
    >
      <template #icon>
        <img :src="character.image" width="50" style="border-radius: 6px" />
      </template>
      <template #heading>{{ character.name }}</template>
      {{ character.status }}
    </VCharacterItem>
    <VButton @click="fetchPreviousPage" :msg="'&lt;'" /> | {{ currentPage }} |
    <VButton @click="fetchNextPage" :msg="'&gt;'" />
  </main>
</template>
