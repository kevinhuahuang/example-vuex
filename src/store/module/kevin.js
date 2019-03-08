import Vue from 'vue'
import Vuex from 'vuex'
import { BE_OLDER, BE_YOUNGER, EARN_MONEY, SPEND_MONEY } from '../mutation-types'

Vue.use(Vuex)

const kevin = {
  namespaced: true,
  state: {
    ages: 35,
    money: 45
  },

  actions: {
    getOlder: ({ commit }) => commit(BE_OLDER), // 括号内无引号
    getYounger: ({ commit }) => commit(BE_YOUNGER),
    earnMoney: ({ commit }) => commit(EARN_MONEY),
    spendMoney: ({ commit }) => commit(SPEND_MONEY)
  },

  mutations: {
    [BE_OLDER] (state) {
      state.ages = state.ages + 1
      // console.log(state.ages)
      if (state.ages > 110) {
        state.ages = 110
      }
    },
    [BE_YOUNGER] (state) {
      state.ages = state.ages - 1
      // console.log(state.ages)
      if (state.ages < 0) {
        state.ages = 0
      }
    },
    [EARN_MONEY] (state) {
      state.money = state.money + 1
    },
    [SPEND_MONEY] (state) {
      state.money = state.money - 1
    }
  },

  getters: {
    ages: state => state.ages, // 写法1
    money (state) { // 写法2
      return state.money
    }
  }

}

export default kevin
