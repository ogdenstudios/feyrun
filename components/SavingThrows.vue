<template>
  <div>
    <span>Strength: {{ scores.strength }}</span>
    <span>Dexterity: {{ scores.dexterity }}</span>
    <span>Constitution: {{ scores.constitution }}</span>
    <span>Intelligence: {{ scores.intelligence }}</span>
    <span>Wisdom: {{ scores.wisdom }}</span>
    <span>Charisma: {{ scores.charisma }}</span>
  </div>
</template>

<script>
export default {
  props: {
    scores: {
      type: Object,
      default: null
    },
    proficiency: {
      type: Number,
      default: 0
    }
  }
}
</script>
