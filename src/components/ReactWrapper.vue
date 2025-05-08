<template>
    <div ref="reactRoot" />
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
  import { createRoot } from 'react-dom/client'
  
  const props = defineProps({
    component: {
      type: Function,
      required: true
    },
    componentProps: {
      type: Object,
      default: () => ({})
    }
  })
  
  const reactRoot = ref(null)
  let root = null
  
  onMounted(() => {
    root = createRoot(reactRoot.value)
    renderReactComponent()
  })
  
  watch(() => props.componentProps, () => {
    renderReactComponent()
  }, { deep: true })
  
  onBeforeUnmount(() => {
    if (root) {
      root.unmount()
    }
  })
  
  function renderReactComponent() {
    const Component = props.component
    root.render(Component(props.componentProps))
  }
  </script>
  