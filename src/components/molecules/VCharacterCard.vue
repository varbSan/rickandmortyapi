<script setup lang="ts">
import VCharacterItem from "@/components/atoms/VCharacterItem.vue";

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
    <VCharacterItem v-if="character.id">
      <template #icon>
        <img :src="character.image" :width="iconWidth" class="cardIcon" />
      </template>
      <template #heading>{{ character.name }}</template>
      {{ character.status }} | {{ character.species }} |
      {{ character.gender }} | {{ character.origin.name }}
    </VCharacterItem>
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
