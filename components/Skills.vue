<template>
  <div class="skills">
    <span>Acrobatics: {{ amnesia(true) ? scores.acrobatics : '' }} </span><br />
    <span>Animal Handling: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Arcana: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Athletics: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Deception: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>History: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Insight: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Intimidation: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Investigation: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Medicine: {{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Nature:{{ amnesia(true) ? scores.acrobatics : '' }}</span
    ><br />
    <span>Perception: {{ amnesia(true) ? scores.acrobatics : '' }} </span><br />
    <span>Performance: {{ amnesia(true) ? scores.acrobatics : '' }} </span
    ><br />
    <span>Religion: {{ amnesia(true) ? scores.acrobatics : '' }} </span><br />
    <span>Sleight of Hand: {{ amnesia(true) ? scores.acrobatics : '' }} </span
    ><br />
    <span>Stealth: {{ amnesia(true) ? scores.acrobatics : '' }} </span><br />
    <span>Survival: {{ amnesia(true) ? scores.acrobatics : '' }} </span><br />
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
