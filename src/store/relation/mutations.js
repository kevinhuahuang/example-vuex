import {FEW_OIL, MORE_OIL} from './mutation-types'

const mutations = {
  [MORE_OIL] (state, n) {
    state.oil = state.oil + n
    if (state.oil > 100) {
      state.oil = 100
    }
  },

  [FEW_OIL] (state, n) {
    state.oil = state.oil - n
    if (state.oil < 0) {
      state.oil = 0
    }
  },

  authorName (state, name) {
    state.authorName = name
  }
}

export default mutations
