<template>
  <div class="container"><PlayerCharacter :pc="halyyra" /></div>
</template>

<script>
// https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-svirfneblin/
import PlayerCharacter from '~/components/PlayerCharacter'
export default {
  components: {
    PlayerCharacter
  },
  data() {
    return {
      halyyra: {
        character_info: {
          name: 'Calwor Valzu',
          class: 'Wizard',
          level: 6,
          background: null,
          race: 'Gnome - svirfneblin',
          alignment: 'true neutral',
          experience: 0
        },
        ability_scores: {
          strength: 10,
          dexterity: 17,
          constitution: 12,
          intelligence: 18,
          wisdom: 17,
          charisma: 8
        },
        proficiency: 3,
        proficiencies: [
          'daggers',
          'darts',
          'slings',
          'quarterstaffs',
          'light_crossbows',
          'intelligence',
          'wisdom',
          'arcana',
          'history'
        ],
        combat: {
          armor_class: 10,
          initiative: 2,
          speed: 20,
          hit_points: 26
        },
        attacks: [],
        features: [
          {
            title: 'Darkvision',
            description:
              '<p>Accustomed to life Underground, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray.</p>'
          },
          {
            title: 'Spellcasting',
            description:
              '<p>As a student of Arcane Magic, you have a Spellbook containing Spells that show the first glimmerings of your true power.</p>'
          },
          {
            title: 'Arcane Recovery',
            description:
              '<p>You have learned to regain some of your magical energy by studying your Spellbook. Once per day when you finish a Short Rest, you can choose expended Spell Slots to recover. The Spell Slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be 6th level or higher.</p><p>For example, if you’re a 4th-level Wizard, you can recover up to two levels worth of Spell Slots. You can recover either a 2nd-level spell slot or two 1st-level Spell Slots.</p>'
          },
          {
            title: 'School of Divination',
            description:
              '<p>Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Divination spell into your spellbook is halved.</p>'
          },
          {
            title: 'Portent',
            description:
              '<p>Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.</p><p>Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.</p>'
          },
          {
            title: 'Expert Divination',
            description:
              "<p>Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level.</p>"
          }
        ],
        languages: ['gnome', 'undercommon', 'common'],
        spell_stats: {
          ability: 'INT',
          dc: 15,
          bonus: 7
        },
        spells: []
      }
    }
  }
}
</script>
