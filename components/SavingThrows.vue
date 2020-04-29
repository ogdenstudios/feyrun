<template>
  <div class="saves">
    <div class="saves__item">
      <h3>Strength save:</h3>
      {{ amnesia(true) ? scores.strength : '' }}
    </div>
    <div class="savess__item">
      <h3>Dexterity save:</h3>
      {{ amnesia(true) ? scores.dexterity : '' }}
    </div>
    <div class="saves__item">
      <h3>Constitution save:</h3>
      {{ amnesia(true) ? scores.constitution : '' }}
    </div>
    <div class="saves__item">
      <h3>Intelligence save:</h3>
      {{ amnesia(true) ? scores.intelligence : '' }}
    </div>
    <div class="saves__item">
      <h3>Wisdom save:</h3>
      {{ amnesia(true) ? scores.wisdom : '' }}
    </div>
    <div class="saves__item">
      <h3>Charisma save:</h3>
      {{ amnesia(true) ? scores.charisma : '' }}
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
