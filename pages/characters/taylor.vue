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
          armor_class: 15,
          initiative: 2,
          speed: 20,
          hit_points: 26
        },
        attacks: [],
        features: [
          {
            memory: true,
            title: 'Darkvision',
            description:
              '<p>Accustomed to life Underground, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray.</p>'
          },
          {
            memory: true,
            title: 'Spellcasting',
            description:
              '<p>As a student of Arcane Magic, you have a Spellbook containing Spells that show the first glimmerings of your true power.</p>'
          },
          {
            memory: false,
            title: 'Arcane Recovery',
            description:
              '<p>You have learned to regain some of your magical energy by studying your Spellbook. Once per day when you finish a Short Rest, you can choose expended Spell Slots to recover. The Spell Slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be 6th level or higher.</p><p>For example, if you’re a 4th-level Wizard, you can recover up to two levels worth of Spell Slots. You can recover either a 2nd-level spell slot or two 1st-level Spell Slots.</p>'
          },
          {
            memory: false,
            title: 'School of Divination',
            description:
              '<p>Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Divination spell into your spellbook is halved.</p>'
          },
          {
            memory: true,
            title: 'Portent',
            description:
              '<p>Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.</p><p>Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.</p>'
          },
          {
            memory: false,
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
        spells: [
          {
            memory: false,
            title: 'Protection from Evil and Good',
            description:
              '<p>Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.</p>',
            level: 0,
            spell_type: 'Wizard'
          },
          {
            memory: false,
            title: 'Jump',
            description:
              "<p>You touch a creature. The creature's jump distance is tripled until the spell ends.</p>",
            level: 1,
            spell_type: 'Wizard'
          },
          {
            memory: false,
            title: 'Levitate',
            description:
              "<p>One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.</p><p> The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.</p><p> When the spell ends, the target floats gently to the ground if it is still aloft.</p>",
            level: 2,
            spell_type: 'Wizard'
          },
          {
            memory: true,
            title: 'Knock',
            description: `<p>Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.</p><p> A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.</p><p> If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.</p><p> When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.</p>`,
            level: 0,
            spell_type: 'Wizard'
          }
        ],
        memories: {
          name: false,
          class: false,
          level: false,
          race: true,
          alignment: false,
          experience: false,
          strength: false,
          dexterity: false,
          constitution: true,
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
          athletics: true,
          deception: false,
          history: false,
          insight: false,
          intimidation: false,
          investigation: true,
          medicine: false,
          nature: false,
          perception: true,
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
