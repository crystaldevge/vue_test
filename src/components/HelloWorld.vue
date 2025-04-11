<template>
  <div class="p-4 rounded bg-gray-100 shadow-md w-64 text-center">
    <h2 class="text-xl font-bold mb-2">Counter</h2>
    <p class="text-2xl mb-4">{{ count }}</p>
    <button @click="increment" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add +1
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<style scoped>
/* სურვილისამებრ შეგიძლია დაამატო შენი სტილები აქ */
</style>
