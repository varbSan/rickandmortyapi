<script setup lang="ts">
import store from "@/store";
import { ref, computed } from "vue";

defineProps<{
  msg: string;
}>();

const searchInput = ref("");
const searchFilter = {
  Alive: true,
  unknown: true,
  Dead: true,
};

const searchPayload = computed(() => {
  return {
    input: searchInput.value,
    filter: searchFilter,
  };
});

const fetchRickAndMortyAPI = () => {
  console.log(searchFilter);
  store.dispatch("fetchRickAndMortyAPI", searchPayload.value);
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <form @submit.prevent="fetchRickAndMortyAPI">
      <input v-model="searchInput" class="greetings" /> <button>Search</button>
      <div>
        <input
          v-model="searchFilter.Alive"
          type="checkbox"
          id="Alive"
          name="Alive"
          checked
        />
        <label for="Alive">Alive</label> |
        <input
          v-model="searchFilter.unknown"
          type="checkbox"
          id="unknown"
          name="unknown"
          checked
        />
        <label for="unkown">Unknown</label> |
        <input
          v-model="searchFilter.Dead"
          type="checkbox"
          id="Dead"
          name="Dead"
          checked
        />
        <label for="Dead">Dead</label>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3,
.greetings form {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3,
  .greetings form {
    text-align: left;
  }
}
</style>
