import Vue from 'vue'
import Vuex from 'vuex'
import { BE_OLDER, BE_YOUNGER, MORE_PRETTY, FEW_PRETTY } from '../mutation-types'

Vue.use(Vuex)

const shirley = {
  namespaced: true, // !import 是namespaced 而不是namespace
  state: {
    ages: 35,
    appearance: 100
  },

  actions: {
    getOlder: ({ commit }) => commit(BE_OLDER),
    getYounger: ({ commit }) => commit(BE_YOUNGER),
    morePretty: ({ commit }) => commit(MORE_PRETTY),
    fewPretty: ({ commit }) => commit(FEW_PRETTY)
  },

  mutations: {
    [BE_OLDER] (state) {
      state.ages = state.ages + 1
      if (state.ages > 110) {
        state.ages = 110
      }
    },
    [BE_YOUNGER] (state) {
      state.ages = state.ages - 1
      if (state.ages < 0) {
        state.ages = 0
      }
    },
    [MORE_PRETTY] (state) {
      state.appearance = state.appearance + 1
    },
    [FEW_PRETTY] (state) {
      state.appearance = state.appearance - 1
    }
  },
  getters: {
    ages: state => state.ages,
    appearance: state => state.appearance
  }
}

export default shirley
