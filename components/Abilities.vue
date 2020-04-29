<template>
  <div class="abilities">
    <div class="abilities__item">
      <h3>Strength</h3>
      {{ amnesia(true) ? abilities.strength : '' }}
    </div>
    <div class="abilities__item">
      <h3>Dexterity</h3>
      {{ amnesia(true) ? abilities.dexterity : '' }}
    </div>
    <div class="abilities__item">
      <h3>Constitution</h3>
      {{ amnesia(true) ? abilities.constitution : '' }}
    </div>
    <div class="abilities__item">
      <h3>Intelligence</h3>
      {{ amnesia(true) ? abilities.intelligence : '' }}
    </div>
    <div class="abilities__item">
      <h3>Wisdom</h3>
      {{ amnesia(true) ? abilities.wisdom : '' }}
    </div>
    <div class="abilities__item">
      <h3>Charisma</h3>
      {{ amnesia(true) ? abilities.charisma : '' }}
    </div>
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

<style scoped lang="scss">
.abilities {
  display: flex;
  flex-direction: column;
  &__item {
    background: rgba(0, 0, 0, 0.9);
    padding: 0 1em 1em 1em;
    text-align: center;
  }
}
</style>
