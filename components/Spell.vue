<template>
  <details v-if="amnesia(true)">
    <summary>{{ spell.title }}</summary>
    <div v-html="spell.description" />
  </details>
</template>

<script>
export default {
  props: {
    spell: {
      type: Object,
      default: null
    }
  }
}
</script>
