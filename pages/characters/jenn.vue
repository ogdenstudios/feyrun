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
            memory: false,
            title: 'Darkvision',
            description:
              '<p>Thanks to your elf blood, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray.</p>'
          },
          {
            memory: false,
            title: 'Fey Ancestry',
            description:
              '<p>You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep.</p>'
          },
          {
            memory: false,
            title: 'Otherworldly Patron',
            description:
              "<p>Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.</p>"
          },
          {
            memory: false,
            title: 'Fey Presence',
            description:
              "<p>Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn. Once you use this feature, you can't use it again until you finish a short or long rest.</p>"
          },
          {
            memory: false,
            title: 'Pact of the Chain',
            description:
              '<p>You learn the Find Familiar spell and can cast it as a ritual. The spell doesn’t count against your number of Spells known.</p><p>When you cast the spell, you can choose one of the normal forms for your familiar or one of the following Special forms: imp, Pseudodragon, Quasit, or Sprite.</p><p>Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one Attack of its own with its Reaction.</p>'
          },
          {
            memory: false,
            title: 'Eldritch invocations',
            description:
              '<p>If an eldritch invocation has Prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its Prerequisites. A level prerequisite refers to your level in this class.</p>'
          },
          {
            memory: false,
            title: 'Misty escape',
            description:
              "<p>Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell. Once you use this feature, you can't use it again until you finish a short or long rest.</p>"
          }
        ],
        languages: ['common', 'elvish', 'sylvan'],
        spell_stats: {
          ability: 'CHA',
          dc: 16,
          bonus: 7
        },
        spells: [
          {
            memory: false,
            title: 'Friends',
            description:
              '<p>For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn’t hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM’s discretion), depending on the nature of your interaction with it.</p>',
            level: 0,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Mage hand',
            description:
              '<p>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.</p><p>You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.</p><p>The hand can’t attack, activate magical items, or carry more than 10 pounds.</p>',
            level: 0,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Prestidigitation',
            description:
              '<p>This spell is a minor magical trick that novice spellcasters use for practice. It has a number of small magical effects.</p>',
            level: 0,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Expeditious retreat',
            description:
              '<p>This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.</p>',
            level: 1,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Comprehened languages',
            description:
              '<p>For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface of which the words are written. It takes about 1 minute to read one page of text.</p><p>This spell doesn’t decode secret messages in a text or glyph, such as an arcane sigil, that isn’t part of a written language.</p',
            level: 1,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Invisibility',
            description:
              '<p>A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell.</p><p>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</p>',
            level: 2,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Darkness',
            description:
              '<p>Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can’t see through this darkness, and nonmagical light can’t illuminate it.</p><p>If the point you choose is on an object you are holding or one that isn’t being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.</p><p>If any of this spell’s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.</p>',
            level: 2,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Mirror Image',
            description:
              '<p>Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it’s impossible to track which image is real. You can use your action to dismiss the illusory duplicates.</p><p>Each time a creature targets you with an attack during the spell’s duration, roll a d20 to determine whether the attack instead targets one of your duplicates.</p><p>If you have three duplicates, you must roll a 6 or higher to change the attack’s target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.</p><p>A duplicate’s AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.</p><p>A creature is unaffected by this spell if it can’t see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.</p>',
            level: 2,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Spider climb',
            description:
              '<p>Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.</p>',
            level: 2,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: 'Fly',
            description:
              '<p>You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.</p><p> When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.</p>',
            level: 3,
            spell_type: 'Warlock'
          },
          {
            memory: false,
            title: "Devil's sight",
            description:
              '<p>You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.</p>',
            level: 0,
            spell_type: 'invocation'
          },
          {
            memory: false,
            title: 'Gaze of Two Minds',
            description:
              '<p>You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings</p>',
            level: 0,
            spell_type: 'invocation'
          },
          {
            memory: false,
            title: 'Mask of many faces',
            description:
              '<p>You can cast Disguise Self at will, without expending a spell slot.</p>',
            level: 0,
            spell_type: 'invocation'
          }
        ],
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
