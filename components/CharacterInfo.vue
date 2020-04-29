<template>
  <div class="characterInfo">
    <div class="characterInfo__item">
      <h3>Name:</h3>
      {{ amnesia(true) ? info.name : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Class:</h3>
      {{ amnesia(true) ? info.class : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Level:</h3>
      {{ amnesia(true) ? info.level : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Background:</h3>
      {{ amnesia(true) ? info.background : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Race:</h3>
      {{ amnesia(true) ? info.race : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Alignment:</h3>
      {{ amnesia(true) ? info.alignment : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Experience:</h3>
      {{ amnesia(true) ? info.experience : '' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.characterInfo {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
}
.characterInfo__item {
  background: rgba(0, 0, 0, 0.9);
  padding: 0 1em 1em 1em;
}
</style>
