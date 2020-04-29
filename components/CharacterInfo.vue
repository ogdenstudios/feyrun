<template>
  <div class="characterInfo">
    <div>{{ amnesia(false) ? info.name : '' }} <span>Character Name</span></div>
    <div>{{ amnesia(true) ? info.class : '' }} <span>Class</span></div>
    <div>{{ amnesia(true) ? info.level : '' }}<span>Level</span></div>
    <div>
      {{ amnesia(true) ? info.background : '' }} <span>Background</span>
    </div>
    <div>{{ amnesia(true) ? info.race : '' }}<span>Race</span></div>
    <div>{{ amnesia(true) ? info.alignment : '' }}<span>Alignment</span></div>
    <div>{{ amnesia(true) ? info.experience : '' }}<span>Experience</span></div>
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

<style scoped>
.characterInfo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
}
</style>
