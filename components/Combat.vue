<template>
  <div>
    <span>Armor class: </span>
    <span>Initiative: </span>
    <span>Speed: </span>
    <span>Max hit points: </span>
  </div>
</template>

<script>
export default {
  props: {
    combat: {
      type: Object,
      default: null
    }
  }
}
</script>
