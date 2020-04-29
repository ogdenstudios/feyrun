<template>
  <div class="skills">
    <span
      >Acrobatics:
      {{
        characterRemembers(memories.acrobatics) ? scores.acrobatics : ''
      }} </span
    ><br />
    <span
      >Animal Handling:
      {{
        characterRemembers(memories.animal_handling) ? scores.acrobatics : ''
      }}</span
    ><br />
    <span
      >Arcana:
      {{ characterRemembers(memories.arcana) ? scores.acrobatics : '' }}</span
    ><br />
    <span
      >Athletics:
      {{
        characterRemembers(memories.athletics) ? scores.acrobatics : ''
      }}</span
    ><br />
    <span
      >Deception:
      {{
        characterRemembers(memories.deception) ? scores.acrobatics : ''
      }}</span
    ><br />
    <span
      >History:
      {{ characterRemembers(memories.history) ? scores.acrobatics : '' }}</span
    ><br />
    <span
      >Insight:
      {{ characterRemembers(memories.insight) ? scores.acrobatics : '' }}</span
    ><br />
    <span
      >Intimidation:
      {{
        characterRemembers(memories.intimidation) ? scores.intimidation : ''
      }}</span
    ><br />
    <span
      >Investigation:
      {{
        characterRemembers(memories.investigation) ? scores.investigation : ''
      }}</span
    ><br />
    <span
      >Medicine:
      {{ characterRemembers(memories.medicine) ? scores.acrobatics : '' }}</span
    ><br />
    <span
      >Nature:{{
        characterRemembers(memories.nature) ? scores.acrobatics : ''
      }}</span
    ><br />
    <span
      >Perception:
      {{
        characterRemembers(memories.perception) ? scores.acrobatics : ''
      }} </span
    ><br />
    <span
      >Performance:
      {{
        characterRemembers(memories.performance) ? scores.acrobatics : ''
      }} </span
    ><br />
    <span
      >Religion:
      {{
        characterRemembers(memories.religion) ? scores.acrobatics : ''
      }} </span
    ><br />
    <span
      >Sleight of Hand:
      {{
        characterRemembers(memories.sleight_of_hand) ? scores.acrobatics : ''
      }} </span
    ><br />
    <span
      >Stealth:
      {{ characterRemembers(memories.stealth) ? scores.acrobatics : '' }} </span
    ><br />
    <span
      >Survival:
      {{
        characterRemembers(memories.survival) ? scores.acrobatics : ''
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
    memories: {
      type: Array,
      default: null
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
