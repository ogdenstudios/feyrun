<template>
  <div class="combat">
    <div class="combat__item">
      <h3>Armor class:</h3>
      {{ characterRemembers(memories.armor_class) ? combat.armor_class : '' }}
    </div>
    <div class="combat__item">
      <h3>Initiative:</h3>
      {{ characterRemembers(memories.initiative) ? combat.initiative : '' }}
    </div>
    <div class="combat__item">
      <h3>Speed:</h3>
      {{ characterRemembers(memories.speed) ? combat.speed : '' }}
    </div>
    <div class="combat__item">
      <h3>Hit points:</h3>
      {{ characterRemembers(memories.hit_points) ? combat.hit_points : '' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    combat: {
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
.combat {
  align-self: flex-start;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  margin-left: 20px;
  padding: 0 1em 1em 1em;
  &__item {
    margin-right: 10px;
    text-align: center;
  }
}
</style>
