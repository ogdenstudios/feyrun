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
          dexterity: 18,
          constitution: 12,
          intelligence: 17,
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
          'spellcasting',
          'arcane_recovery',
          'school_of_divination',
          'portent',
          'expert_divination',
          'darkvision',
          'low_light_vision'
        ],
        languages: ['gnome', 'undercommon', 'common'],
        spells: {
          cantrips_known: 4,
          first_level_spell_slots: 4,
          second_level_spell_slots: 3,
          third_level_spell_slots: 3
        }
      }
    }
  }
}
</script>
