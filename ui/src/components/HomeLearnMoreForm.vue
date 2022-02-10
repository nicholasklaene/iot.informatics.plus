<script setup lang="ts">
function handleSubmit() {
  console.log("Submit!");
}
</script>

<template>
  <div class="text-white">
    <div class="bg-white p-8">
      <form
        class="text-black flex flex-col gap-4"
        @submit.prevent="handleSubmit()"
      >
        <h3 class="text-2xl pb-2">Learn more</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email" />
        <select class="text-gray-600">
          <option value="-1" disabled selected>I am a...</option>
          <option>Student</option>
          <option>Faculty</option>
          <option>Other</option>
        </select>
        <textarea rows="6" placeholder="Optional message"></textarea>
        <div>
          <button class="bg-black text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
