<template>
  <div class="saves">
    <div class="saves__item">
      <h3>STR SAVE:</h3>
      {{
        characterRemembers(memories.strength_save) ? bonus(scores.strength) : ''
      }}
    </div>
    <div class="savess__item">
      <h3>DEX SAVE:</h3>
      {{
        characterRemembers(memories.dexterity_save)
          ? bonus(scores.dexterity)
          : ''
      }}
    </div>
    <div class="saves__item">
      <h3>CON SAVE:</h3>
      {{
        characterRemembers(memories.constitution_save)
          ? bonus(scores.constitution)
          : ''
      }}
    </div>
    <div class="saves__item">
      <h3>INT SAVE:</h3>
      {{
        characterRemembers(memories.intelligence_save)
          ? bonus(scores.intelligence)
          : ''
      }}
    </div>
    <div class="saves__item">
      <h3>WIS SAVE:</h3>
      {{ characterRemembers(memories.wisdom_save) ? bonus(scores.wisdom) : '' }}
    </div>
    <div class="saves__item">
      <h3>CHA SAVE:</h3>
      {{
        characterRemembers(memories.charisma_save) ? bonus(scores.charisma) : ''
      }}
    </div>
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
    },
    memories: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.saves {
  margin-left: 20px;
  background: rgba(0, 0, 0, 0.9);
  padding: 0 1em 1em 1em;
}
h3 {
  display: inline;
}
</style>
