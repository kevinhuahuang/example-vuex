import getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

const state = {
  oil: 10,
  speed: 10,
  temperature: 100,
  authorName: 'shirley'
}

const relation = {
  state,
  getters,
  mutations,
  actions
}

export default relation
