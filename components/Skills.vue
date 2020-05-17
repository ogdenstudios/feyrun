<template>
  <div class="skills">
    <span
      >Acrobatics:
      {{
        characterRemembers(memories.acrobatics)
          ? getScore('acrobatics', 'dexterity')
          : ''
      }} </span
    ><br />
    <span
      >Animal Handling:
      {{
        characterRemembers(memories.animal_handling)
          ? getScore('animal_handling', 'wisdom')
          : ''
      }}</span
    ><br />
    <span
      >Arcana:
      {{
        characterRemembers(memories.arcana)
          ? getScore('arcana', 'intelligence')
          : ''
      }}</span
    ><br />
    <span
      >Athletics:
      {{
        characterRemembers(memories.athletics)
          ? getScore('athletics', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Deception:
      {{
        characterRemembers(memories.deception)
          ? getScore('deception', 'charisma')
          : ''
      }}</span
    ><br />
    <span
      >History:
      {{
        characterRemembers(memories.history)
          ? getScore('history', 'intelligence')
          : ''
      }}</span
    ><br />
    <span
      >Insight:
      {{
        characterRemembers(memories.insight)
          ? getScore('insight', 'wisdom')
          : ''
      }}</span
    ><br />
    <span
      >Intimidation:
      {{
        characterRemembers(memories.intimidation)
          ? getScore('intimidation', 'charisma')
          : ''
      }}</span
    ><br />
    <span
      >Investigation:
      {{
        characterRemembers(memories.investigation)
          ? getScore('investigation', 'intelligence')
          : ''
      }}</span
    ><br />
    <span
      >Medicine:
      {{
        characterRemembers(memories.medicine)
          ? getScore('medicine', 'wisdom')
          : ''
      }}</span
    ><br />
    <span
      >Nature:{{
        characterRemembers(memories.nature)
          ? getScore('nature', 'intelligence')
          : ''
      }}</span
    ><br />
    <span
      >Perception:
      {{
        characterRemembers(memories.perception)
          ? getScore('perception', 'wisdom')
          : ''
      }} </span
    ><br />
    <span
      >Performance:
      {{
        characterRemembers(memories.performance)
          ? getScore('performance', 'charisma')
          : ''
      }} </span
    ><br />
    <span
      >Religion:
      {{
        characterRemembers(memories.religion)
          ? getScore('religion', 'charisma')
          : ''
      }} </span
    ><br />
    <span
      >Sleight of Hand:
      {{
        characterRemembers(memories.sleight_of_hand)
          ? getScore('sleight_of_hand', 'intelligence')
          : ''
      }} </span
    ><br />
    <span
      >Stealth:
      {{
        characterRemembers(memories.stealth)
          ? getScore('stealth', 'dexterity')
          : ''
      }} </span
    ><br />
    <span
      >Survival:
      {{
        characterRemembers(memories.survival)
          ? getScore('survival', 'wisdom')
          : ''
      }} </span
    ><br />
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
      type: Array,
      default: null
    },
    memories: {
      type: Object,
      default: null
    }
  },
  methods: {
    getScore(skill, ability) {
      if (this.proficiencies[skill]) {
        return this.bonus(this.scores[ability]) + this.proficiency
      } else {
        return this.bonus(this.scores[ability])
      }
    }
  }
}
</script>

<style scoped lang="scss">
.skills {
  background: rgba(0, 0, 0, 0.9);
  margin-left: 20px;
  padding: 0 1em 1em 1em;
}
</style>
