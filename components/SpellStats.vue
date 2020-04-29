<template>
  <div class="spellStats">
    <div>
      <h3>Spellcasting Ability</h3>
      {{ characterRemembers(memories.spell_ability) ? stats.ability : '' }}
    </div>
    <div>
      <h3>Spell Save DC</h3>
      {{ characterRemembers(memories.spell_save) ? stats.dc : '' }}
    </div>
    <div>
      <h3>Spell Attack Bonus</h3>
      {{ characterRemembers(memories.spell_save) ? stats.bonus : '' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
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
.spellStats {
  align-self: flex-start;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  padding: 0 1em 1em 1em;
  div {
    text-align: center;
  }
}
</style>
