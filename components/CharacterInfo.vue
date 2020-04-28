<template>
  <div class="characterInfo">
    <span>Name: {{ info.name }}</span>
    <span>Class: {{ info.class }}</span>
    <span>Level: {{ info.level }}</span>
    <span>Background: {{ info.background }}</span>
    <span>Race: {{ info.race }}</span>
    <span>Alignment: {{ info.alignment }}</span>
    <span>Experience: {{ info.experience }}</span>
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
