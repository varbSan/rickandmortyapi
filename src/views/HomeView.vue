<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import { useStore } from "vuex";

const store = useStore();

const incrementCount = () => {
  store.commit("incrementCount");
};
const resetCount = () => {
  store.commit("resetCount");
};
</script>

<template>
  <main>
    <div>{{ store.state.count }}</div>
    <button @click="incrementCount">Increment</button>
    <button @click="resetCount">Reset</button>
    <TheWelcome />
  </main>
</template>
