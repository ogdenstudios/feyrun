<template>
  <details>
    <summary>{{ feature.title }}</summary>
    <div v-html="feature.description" />
  </details>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      default: null
    }
  }
}
</script>
