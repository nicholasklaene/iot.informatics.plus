<script setup lang="ts">
import AppNavbar from "../components/AppNavbar.vue";
import HomeHero from "../components/HomeHero.vue";
import HomeLearnMoreForm from "../components/HomeLearnMoreForm.vue";
import HomeMissionCard from "../components/HomeMissionCard.vue";
</script>

<template>
  <div class="bg-black">
    <header class="mx-auto max-w-7xl">
      <AppNavbar />
    </header>
    <section
      class="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 mx-auto max-w-7xl"
    >
      <HomeHero />
      <HomeLearnMoreForm />
    </section>
  </div>
  <section class="p-12">
    <HomeMissionCard />
    <HomeMissionCard />
    <HomeMissionCard />
    <HomeMissionCard />
  </section>
</template>
