<template>
  <div class="abilities">
    <span>Strength: {{ abilities.strength }}</span>
    <span>Dexterity: {{ abilities.dexterity }}</span>
    <span>Constitution: {{ abilities.constitution }}</span>
    <span>Intelligence: {{ abilities.intelligence }}</span>
    <span>Wisdom: {{ abilities.wisdom }}</span>
    <span>Charisma: {{ abilities.charisma }}</span>
  </div>
</template>

<script>
export default {
  props: {
    abilities: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.abilities {
  width: 100px;
  display: flex;
  flex-direction: column;
}
</style>
