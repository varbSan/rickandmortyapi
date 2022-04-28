<script setup lang="ts">
import { RouterLink } from "vue-router";
import TheSearchBar from "@/components/molecules/TheSearchBar.vue";
import VButton from "@/components/atoms/VButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToPreviousPage = () => {
  router.go(-1);
};
</script>

<template>
  <RouterLink class="logoLink" to="/characters">
    <img
      alt="Morty logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </RouterLink>

  <div class="wrapper">
    <TheSearchBar msg="Ricksearch Me!" />

    <nav>
      <VButton :msg="'Previous'" @click="goToPreviousPage" />
      <RouterLink to="/characters">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>
