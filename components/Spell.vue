<template>
  <details v-if="characterRemembers(spell.memory)">
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
