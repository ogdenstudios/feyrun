<template>
  <article>
    <CharacterInfo :info="pc.character_info" :memories="pc.memories" />
    <Abilities :abilities="pc.ability_scores" :memories="pc.memories" />
    <div class="derivedScores">
      <div class="proficiency">
        <h3>Proficiency:</h3>
        <span>
          {{
            characterRemembers(pc.memories.proficiency) ? pc.proficiency : ''
          }}</span
        >
      </div>
      <SavingThrows
        :scores="pc.ability_scores"
        :proficiency="pc.proficiency"
        :memories="pc.memories"
      />
      <Skills
        :scores="pc.ability_scores"
        :proficiency="pc.proficiency"
        :proficiencies="pc.proficiencies"
        :memories="pc.memories"
      />
    </div>
    <div style="flex: 1;">
      <Combat :combat="pc.combat" :memories="pc.memories" />
      <div class="features">
        <h2>Features</h2>
        <Feature
          v-for="feat in pc.features"
          :key="feat.title"
          :feature="feat"
        />
      </div>
      <SpellStats :stats="pc.spell_stats" />
      <div class="spells">
        <h2>Spells</h2>
        <Spell v-for="spell in pc.spells" :key="spell.title" :spell="spell" />
      </div>
    </div>
  </article>
</template>

<script>
import SavingThrows from './SavingThrows'
import Skills from './Skills'
import Combat from './Combat'
import CharacterInfo from '~/components/CharacterInfo'
import Abilities from '~/components/Abilities'
import Feature from '~/components/Feature'
import Spell from '~/components/Spell'
import SpellStats from '~/components/SpellStats'
export default {
  components: {
    CharacterInfo,
    SavingThrows,
    Skills,
    Combat,
    Abilities,
    Feature,
    Spell,
    SpellStats
  },
  props: {
    pc: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
article {
  display: flex;
  flex-wrap: wrap;
}
.derivedScores {
  width: 300px;
  display: flex;
  flex-direction: column;
}
.proficiency {
  background: rgba(0, 0, 0, 0.9);
  margin-left: 20px;
  padding: 1em;
  h3 {
    display: inline;
  }
}
.features,
.spells {
  background: rgba(0, 0, 0, 0.9);
  margin-left: 20px;
  padding: 0 1em 1em 1em;
}
</style>
