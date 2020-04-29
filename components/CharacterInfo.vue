<template>
  <div class="characterInfo">
    <div class="characterInfo__item">
      <h3>Name:</h3>
      {{ characterRemembers(memories.name) ? info.name : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Class:</h3>
      {{ characterRemembers(memories.class) ? info.class : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Level:</h3>
      {{ characterRemembers(memories.level) ? info.level : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Background:</h3>
      {{ characterRemembers(memories.background) ? info.background : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Race:</h3>
      {{ characterRemembers(memories.race) ? info.race : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Alignment:</h3>
      {{ characterRemembers(memories.alignment) ? info.alignment : '' }}
    </div>
    <div class="characterInfo__item">
      <h3>Experience:</h3>
      {{ characterRemembers(memories.experience) ? info.experience : '' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
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
