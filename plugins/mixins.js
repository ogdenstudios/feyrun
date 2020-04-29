import Vue from 'vue'
Vue.mixin({
  methods: {
    characterRemembers(memory) {
      if (memory || process.env.NODE_ENV !== 'production') {
        return true
      } else {
        return false
      }
    },
    scoreAndBonus(score) {
      return `${score} (${-5 + Math.floor(score / 2)})`
    },
    bonus(score) {
      return -5 + Math.floor(score / 2)
    }
  }
})
