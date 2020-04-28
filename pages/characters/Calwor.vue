<template>
  <PlayerCharacter :pc="halyyra" />
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
        name: 'Calwor Valzu',
        class: 'Wizard',
        level: 6,
        background: null,
        race: 'Gnome - svirfneblin',
        alignment: 'true neutral',
        experience: 0,
        ability_scores: {
          strength: 12,
          dexterity: 16,
          constitution: 12,
          intelligence: 17,
          wisdom: 15,
          charisma: 12
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
          speed: 30,
          hit_points: 26
        },
        attacks: [],
        features: [
          'spellcasting',
          'arcane_recovery',
          'school_of_divination',
          'portent',
          'expert_divination'
        ],
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
