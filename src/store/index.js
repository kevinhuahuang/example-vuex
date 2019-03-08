import Vue from 'vue'
import Vuex from 'vuex'
// import * as getterss from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import kevin from './module/kevin'
import shirley from './module/shirley'
import relation from './relation'

Vue.use(Vuex)

// 首先声明一个状态 state
const state = {
  kevinAndShirleyAges: 100,
  gasRate: 2,
  temperatureRate: 0,
  gasAndTemperatureRate: 0
}

// const actions = {
//   // ...actions, 从外部action文件引用actions
// }
//
// const mutations = {
//   // ...mutations, 从外部mutation文件引用mutations
// }

const getters = {
  kevinAndShirleyAges: state => state.kevin.ages + state.shirley.ages,
  gasRate: state => state.gasRate,
  temperatureRate: state => state.gasRate * 2,
  gasAndTemperatureRate (state, getters) {
    return getters.gasRate + getters.temperatureRate
  }
  // ...kevin.getters // modules 已定义，再定义会报重复定义错误
}

// 注册所有模块
const store = new Vuex.Store({
  state,
  getters,
  actions, // 通过import从外部文件actions中导入
  mutations, // 通过import从外部文件mutations中导入
  modules: {
    kevin,
    shirley,
    relation
  }
})

export default store
