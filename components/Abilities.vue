<template>
  <div class="abilities">
    <div class="abilities__item">
      <h3>Strength</h3>
      {{
        characterRemembers(memories.strength)
          ? scoreAndBonus(abilities.strength)
          : ''
      }}
    </div>
    <div class="abilities__item">
      <h3>Dexterity</h3>
      {{
        characterRemembers(memories.dexterity)
          ? scoreAndBonus(abilities.dexterity)
          : ''
      }}
    </div>
    <div class="abilities__item">
      <h3>Constitution</h3>
      {{
        characterRemembers(memories.constitution)
          ? scoreAndBonus(abilities.constitution)
          : ''
      }}
    </div>
    <div class="abilities__item">
      <h3>Intelligence</h3>
      {{
        characterRemembers(memories.intelligence)
          ? scoreAndBonus(abilities.intelligence)
          : ''
      }}
    </div>
    <div class="abilities__item">
      <h3>Wisdom</h3>
      {{
        characterRemembers(memories.wisdom)
          ? scoreAndBonus(abilities.wisdom)
          : ''
      }}
    </div>
    <div class="abilities__item">
      <h3>Charisma</h3>
      {{
        characterRemembers(memories.charisma)
          ? scoreAndBonus(abilities.charisma)
          : ''
      }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    abilities: {
      type: Object,
      default: null
    },
    memories: {
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
