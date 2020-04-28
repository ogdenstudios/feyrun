<template>
  <article>
    <span>Name: {{ pc.name }}</span>
    <span>Class: {{ pc.class }}</span>
    <span>Level: {{ pc.level }}</span>
    <span>Background: {{ pc.background }}</span>
    <span>Race: {{ pc.race }}</span>
    <span>Alignment: {{ pc.alignment }}</span>
    <span>Experience: {{ pc.experience }}</span>
    <span>Strength: {{ pc.ability_scores.strength }}</span>
    <span>Dexterity: {{ pc.ability_scores.dexterity }}</span>
    <span>Constitution: {{ pc.ability_scores.constitution }}</span>
    <span>Intelligence: {{ pc.ability_scores.intelligence }}</span>
    <span>Wisdom: {{ pc.ability_scores.wisdom }}</span>
    <span>Charisma: {{ pc.ability_scores.charisma }}</span>
    <span>Proficiency: {{ pc.proficiency }}</span>
    <SavingThrows :scores="pc.ability_scores" :proficiency="pc.proficiency" />
    <Skills
      :scores="pc.ability_scores"
      :proficiency="pc.proficiency"
      :proficiencies="pc.proficiencies"
    />
    <Combat :combat="pc.combat" />
  </article>
</template>

<script>
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import Combat from "./Combat";
export default {
  props: ["pc"],
  components: {
    SavingThrows,
    Skills,
    Combat,
  },
};
</script>
