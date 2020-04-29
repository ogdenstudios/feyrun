import Vue from 'vue'
Vue.mixin({
  methods: {
    amnesia(stillActive) {
      // If we used `amnesia(false)` or we're not in prod, return true
      if (!stillActive || process.env.NODE_ENV !== 'production') {
        return true
      } else {
        // Return false for `amnesia(true)`
        return false
      }
    }
  }
})
