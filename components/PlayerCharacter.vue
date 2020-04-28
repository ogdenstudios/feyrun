<template>
  <article>
    <CharacterInfo :info="pc.character_info" />
    <Abilities :abilities="pc.ability_scores" />
    <div class="derivedScores">
      <div>Proficiency: {{ pc.proficiency }}</div>
      <SavingThrows :scores="pc.ability_scores" :proficiency="pc.proficiency" />
      <Skills
        :scores="pc.ability_scores"
        :proficiency="pc.proficiency"
        :proficiencies="pc.proficiencies"
      />
    </div>

    <Combat :combat="pc.combat" />
  </article>
</template>

<script>
import SavingThrows from './SavingThrows'
import Skills from './Skills'
import Combat from './Combat'
import CharacterInfo from '~/components/CharacterInfo'
import Abilities from '~/components/Abilities'
export default {
  components: {
    CharacterInfo,
    SavingThrows,
    Skills,
    Combat,
    Abilities
  },
  props: {
    pc: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-wrap: wrap;
}
.derivedScores {
  width: 300px;
  display: flex;
  flex-direction: column;
}
</style>
