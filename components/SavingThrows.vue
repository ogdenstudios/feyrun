<template>
  <div class="saves">
    <div class="saves__item">
      <h3>STR SAVE:</h3>
      {{ characterRemembers(memories.strength_save) ? strength : '' }}
    </div>
    <div class="savess__item">
      <h3>DEX SAVE:</h3>
      {{ characterRemembers(memories.dexterity_save) ? dexterity : '' }}
    </div>
    <div class="saves__item">
      <h3>CON SAVE:</h3>
      {{ characterRemembers(memories.constitution_save) ? constitution : '' }}
    </div>
    <div class="saves__item">
      <h3>INT SAVE:</h3>
      {{ characterRemembers(memories.intelligence_save) ? intelligence : '' }}
    </div>
    <div class="saves__item">
      <h3>WIS SAVE:</h3>
      {{ characterRemembers(memories.wisdom_save) ? wisdom : '' }}
    </div>
    <div class="saves__item">
      <h3>CHA SAVE:</h3>
      {{ characterRemembers(memories.charisma_save) ? charisma : '' }}
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
    proficiencies: {
      type: Object,
      default: null
    },
    memories: {
      type: Object,
      default: null
    }
  },
  computed: {
    strength() {
      if (this.proficiencies.strength) {
        return this.bonus(this.scores.strength) + this.proficiency
      } else {
        return this.bonus(this.scores.strength)
      }
    },
    dexterity() {
      if (this.proficiencies.dexterity) {
        return this.bonus(this.scores.dexterity) + this.proficiency
      } else {
        return this.bonus(this.scores.dexterity)
      }
    },
    constitution() {
      if (this.proficiencies.constitution) {
        return this.bonus(this.scores.constitution) + this.proficiency
      } else {
        return this.bonus(this.scores.constitution)
      }
    },
    intelligence() {
      if (this.proficiencies.intelligence) {
        return this.bonus(this.scores.intelligence) + this.proficiency
      } else {
        return this.bonus(this.scores.intelligence)
      }
    },
    wisdom() {
      if (this.proficiencies.wisdom) {
        return this.bonus(this.scores.wisdom) + this.proficiency
      } else {
        return this.bonus(this.scores.wisdom)
      }
    },
    charisma() {
      if (this.proficiencies.charisma) {
        return this.bonus(this.scores.charisma) + this.proficiency
      } else {
        return this.bonus(this.scores.charisma)
      }
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
