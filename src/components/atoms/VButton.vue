<template>
  <button class="a-button">
    {{ msg }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<style scoped>
.a-button {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  color: white;
  font-weight: bold;
  padding: 2px 20px;
  border-radius: 2px;
  text-align: center;
  display: inline-block;

  transition: all 200ms;
}

.a-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 0.5rem hsla(160, 100%, 37%);
  background-color: hsla(160, 100%, 40%, 1);
}
</style>
