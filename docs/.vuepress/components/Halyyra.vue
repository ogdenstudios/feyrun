<template>
  <PlayerCharacter :pc="halyyra" />
</template>

<script>
export default {
  data() {
    return {
      halyyra: {
        name: "Halyyra",
        class: "Warlock",
        level: 6,
        background: null,
        race: "Half-elf",
        alignment: "true neutral",
        experience: 0,
        ability_scores: {
          strength: 12,
          dexterity: 10,
          constitution: 17,
          intelligence: 16,
          wisdom: 12,
          charisma: 21,
        },
        proficiency: 3,
        proficiencies: [
          "light_armor",
          "simple_weapons",
          "wisdom",
          "charisma",
          "arcana",
          "nature",
          "animal_handling",
          "investigation",
        ],
        combat: {
          armor_class: 10,
          initiative: 2,
          speed: 30,
          hit_points: 51,
        },
        features: [
          "darkvision",
          "fey_ancestry",
          "otherwordly_patron",
          "fey_presence",
          "pact_of_the_chain",
          "eldritch_invocations",
          "misty_escape",
        ],
        languages: ["common", "elvish", "sylvan"],
        spells: {
          cantrips_known: 3,
          spells_known: 7,
          spell_slots: 2,
          slot_level: 3,
          invocations_known: 3,
          cantrips: ["friends", "mage_hand", "prestidigitation"],
          first_level: ["expeditious_retreat", "comprehened_languages"],
          second_level: [
            "invisibility",
            "darkness",
            "mirror_image",
            "spider_climb",
          ],
          third_level: ["fly"],
          invocations: [
            "devils_sight",
            "gaze_of_two_minds",
            "mask_of_many_faces",
          ],
        },
      },
    };
  },
};
</script>
