<template>
  <div class="skills">
    <span
      >Acrobatics:
      {{
        characterRemembers(memories.acrobatics)
          ? getScore('acrobatics', 'strength')
          : ''
      }} </span
    ><br />
    <span
      >Animal Handling:
      {{
        characterRemembers(memories.animal_handling)
          ? getScore('animal_handling', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Arcana:
      {{
        characterRemembers(memories.arcana)
          ? getScore('arcana', 'strength')
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
          ? getScore('deception', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >History:
      {{
        characterRemembers(memories.history)
          ? getScore('history', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Insight:
      {{
        characterRemembers(memories.insight)
          ? getScore('insight', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Intimidation:
      {{
        characterRemembers(memories.intimidation)
          ? getScore('intimidation', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Investigation:
      {{
        characterRemembers(memories.investigation)
          ? getScore('investigation', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Medicine:
      {{
        characterRemembers(memories.medicine)
          ? getScore('medicine', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Nature:{{
        characterRemembers(memories.nature)
          ? getScore('nature', 'strength')
          : ''
      }}</span
    ><br />
    <span
      >Perception:
      {{
        characterRemembers(memories.perception)
          ? getScore('perception', 'strength')
          : ''
      }} </span
    ><br />
    <span
      >Performance:
      {{
        characterRemembers(memories.performance)
          ? getScore('performance', 'strength')
          : ''
      }} </span
    ><br />
    <span
      >Religion:
      {{
        characterRemembers(memories.religion)
          ? getScore('religion', 'strength')
          : ''
      }} </span
    ><br />
    <span
      >Sleight of Hand:
      {{
        characterRemembers(memories.sleight_of_hand)
          ? getScore('sleight_of_hand', 'strength')
          : ''
      }} </span
    ><br />
    <span
      >Stealth:
      {{
        characterRemembers(memories.stealth)
          ? getScore('stealth', 'strength')
          : ''
      }} </span
    ><br />
    <span
      >Survival:
      {{
        characterRemembers(memories.survival)
          ? getScore('survival', 'strength')
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
      type: Object,
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
