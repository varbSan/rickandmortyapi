<script setup lang="ts">
import CharacterItem from "@/components/CharacterItem.vue";

defineProps<{
  imageWidth: string;
  iconWidth: string;
  character: {
    id: string;
    name: string;
    image: string;
    species: string;
    status: string;
    gender: string;
  };
}>();
</script>

<template>
  <main class="grid">
    <img :src="character.image" :width="imageWidth" class="cardImage" />
    <CharacterItem v-if="character.id">
      <template #icon>
        <img :src="character.image" :width="iconWidth" class="cardIcon" />
      </template>
      <template #heading>{{ character.name }}</template>
      {{ character.status }} | {{ character.species }} |
      {{ character.gender }} | {{ character.origin.name }}
    </CharacterItem>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  place-items: center;
}

.cardImage {
  border-radius: 20px;
  margin-top: 20px;
}

.cardIcon {
  border-radius: 10px;
}
</style>
