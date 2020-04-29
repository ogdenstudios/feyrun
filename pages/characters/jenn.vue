<template>
  <div class="container"><PlayerCharacter :pc="halyyra" /></div>
</template>

<script>
import PlayerCharacter from '~/components/PlayerCharacter'
export default {
  components: {
    PlayerCharacter
  },
  data() {
    return {
      halyyra: {
        character_info: {
          name: 'Halyyra',
          class: 'Warlock',
          level: 6,
          background: null,
          race: 'Half-elf',
          alignment: 'true neutral',
          experience: 0
        },
        ability_scores: {
          strength: 12,
          dexterity: 10,
          constitution: 17,
          intelligence: 16,
          wisdom: 12,
          charisma: 21
        },
        proficiency: 3,
        proficiencies: [
          'light_armor',
          'simple_weapons',
          'wisdom',
          'charisma',
          'arcana',
          'nature',
          'animal_handling',
          'investigation'
        ],
        combat: {
          armor_class: 10,
          initiative: 2,
          speed: 30,
          hit_points: 51
        },
        features: [
          {
            title: 'Darkvision',
            description:
              '<p>Thanks to your elf blood, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray.</p>'
          },
          {
            title: 'Fey Ancestry',
            description:
              '<p>You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep.</p>'
          },
          {
            title: 'Otherworldly Patron',
            description:
              "<p>Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.</p>"
          },
          {
            title: 'Fey Presence',
            description:
              "<p>Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn. Once you use this feature, you can't use it again until you finish a short or long rest.</p>"
          },
          {
            title: 'Pact of the Chain',
            description:
              '<p>You learn the Find Familiar spell and can cast it as a ritual. The spell doesn’t count against your number of Spells known.</p><p>When you cast the spell, you can choose one of the normal forms for your familiar or one of the following Special forms: imp, Pseudodragon, Quasit, or Sprite.</p><p>Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one Attack of its own with its Reaction.</p>'
          },
          {
            title: 'Eldritch invocations',
            description:
              '<p>If an eldritch invocation has Prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its Prerequisites. A level prerequisite refers to your level in this class.</p>'
          },
          {
            title: 'Misty escape',
            description:
              "<p>Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell. Once you use this feature, you can't use it again until you finish a short or long rest.</p>"
          }
        ],
        languages: ['common', 'elvish', 'sylvan'],
        spells: {
          cantrips_known: 3,
          spells_known: 7,
          spell_slots: 2,
          slot_level: 3,
          invocations_known: 3,
          cantrips: ['friends', 'mage_hand', 'prestidigitation'],
          first_level: ['expeditious_retreat', 'comprehened_languages'],
          second_level: [
            'invisibility',
            'darkness',
            'mirror_image',
            'spider_climb'
          ],
          third_level: ['fly'],
          invocations: [
            'devils_sight',
            'gaze_of_two_minds',
            'mask_of_many_faces'
          ]
        }
      }
    }
  }
}
</script>
