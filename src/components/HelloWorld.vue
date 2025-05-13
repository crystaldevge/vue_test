<template>
  <div class="p-4 rounded bg-gray-100 shadow-md w-64 text-center">
    <h2 class="text-xl font-bold mb-2">This is Vue Page</h2>
    <p class="text-2xl mb-4">{{ count }}</p>
    <button @click="toggle" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Click
    </button>
  </div>
  <div v-if="isVisible" class="p-4 mt-4 rounded bg-gray-100 shadow-md w-64 text-center">
    <ReactWrapper :component="ReactMessageComponent" :componentProps="{ message: 'Hello from Vue!', type: 'success' }" />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent  } from 'vue'
import ReactWrapper from './ReactWrapper.vue'
import React from 'react' // ❗ აუცილებლად უნდა გქონდეს ეს
import Message from 'dashboard_test/Message'
// const Message = defineAsyncComponent(() => import('dashboard_test/Message'))

const isVisible = ref(false)

function toggle() {
  isVisible.value = !isVisible.value
}

const ReactMessageComponent = (props) => {
  return React.createElement(Message, props)
}

</script>
<style scoped>
/* სურვილისამებრ შეგიძლია დაამატო შენი სტილები აქ */
</style>
