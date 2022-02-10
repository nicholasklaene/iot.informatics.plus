<template>
  <nav class="px-12 py-8">
    <ul class="text-white text-lg flex">
      <li>
        <router-link to="/" class="tracking-wider">
          <img src="../assets/nku.png" alt="nku" class="object-contain h-8" />
        </router-link>
      </li>
      <li class="ml-auto">
        <router-link
          to="/projects"
          class="text-md px-4 py-2 bg-white text-black font-normal rounded-3xl"
        >
          Projects
        </router-link>
      </li>
    </ul>
  </nav>
</template>
