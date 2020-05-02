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
          name: 'Agarax',
          class: 'Druid',
          level: 6,
          background: null,
          race: 'Firenewt',
          alignment: 'Chaotic neutral',
          experience: 0
        },
        ability_scores: {
          strength: 13,
          dexterity: 12,
          constitution: 17,
          intelligence: 12,
          wisdom: 19,
          charisma: 11
        },
        proficiency: 3,
        proficiencies: {
          light_armor: true,
          medium_armor: true,
          shields: true,
          clubs: true,
          daggers: true,
          darts: true,
          javelins: true,
          maces: true,
          quarterstaffs: true,
          scimitars: true,
          sickles: true,
          pickes: true,
          slings: true,
          spears: true,
          intelligence: true,
          wisdom: true,
          arcana: true,
          nature: true,
          insight: true,
          survival: true
        },
        combat: {
          armor_class: 10,
          initiative: 1,
          speed: 30,
          hit_points: 48
        },
        features: [
          {
            memory: false,
            title: 'Child of Imix',
            description:
              '<p>You are resistant to fire damage and have a special ability to spit fire. As an action, you can make a ranged weapon attack against a creature or object within range. The range of this attack is 20 feet and the long range is 40 feet. On a hit, that creature takes 2d8 fire damage and all other creatures within 10 feet of it take half as much. If you miss, the target still takes half damage, but nearby creatures take none. The damage of this fire breath increases as you level up; it increases to 3d8 at 5th level, 4d8 at 11th level, and 5d8 at 17th level. Once you make this attack, you cannot use it again until you finish a short or long rest.</p>'
          },
          {
            memory: false,
            title: 'Soldier for the Fire Prince',
            description:
              '<p>You gain proficiency in light and medium armor and with scimitars, daggers, spears, and pikes.</p>'
          },
          {
            memory: false,
            title: 'Hold Breath',
            description:
              '<p>You can hold your breath for up to 15 minutes at a time.</p>'
          },
          {
            memory: false,
            title: 'Druidic',
            description:
              '<p>You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.</p>'
          },
          {
            memory: false,
            title: 'Wild shape',
            description:
              "<p>Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.</p><p>Check the player's manual for the full rules about this.</p>"
          },
          {
            memory: false,
            title: 'Circle of the Moon',
            description:
              "<p>At 2nd level, you choose to identify with a circle of druids: the Circle of the Land detailed at the end of the class description or one from the Player's Handbook or other sources. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.</p>"
          },
          {
            memory: false,
            title: 'Combat wild shape',
            description:
              '<p>When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.</p><p>Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.</p>'
          },
          {
            memory: false,
            title: 'Circle forms',
            description:
              '<p>The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.</p><p>Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.</p>'
          },
          {
            memory: false,
            title: 'Wild shape improvement',
            description:
              "<p>At 4th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1/2 or lower that doesn't have a flying speed. You can use this feature twice. You regain expended uses when you finish a short or long rest.</p>"
          },
          {
            memory: false,
            title: 'Primal strike',
            description:
              '<p>Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p>'
          }
        ],
        languages: ['common', 'draconic', 'ignan'],
        spell_stats: {
          ability: 'WIS',
          dc: 15,
          bonus: 6
        },
        spells: [],
        memories: {
          name: false,
          class: false,
          level: false,
          race: false,
          alignment: false,
          experience: false,
          strength: false,
          dexterity: false,
          constitution: false,
          intelligence: false,
          wisdom: false,
          charisma: false,
          armor_class: false,
          initiative: false,
          speed: false,
          hit_points: false,
          proficiency: false,
          strength_save: false,
          dexterity_save: false,
          intelligence_save: false,
          wisdom_save: false,
          charisma_save: false,
          acrobatics: false,
          animal_handling: false,
          arcana: false,
          athletics: false,
          deception: false,
          history: false,
          insight: false,
          intimidation: false,
          investigation: false,
          medicine: false,
          nature: false,
          perception: false,
          performance: false,
          religion: false,
          sleight_of_hand: false,
          stealth: false,
          survival: false,
          spell_ability: false,
          spell_save: false,
          spell_attack: false
        }
      }
    }
  }
}
</script>
