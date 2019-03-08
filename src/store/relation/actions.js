import {FEW_OIL, MORE_OIL} from './mutation-types'
import * as api from '../../api'

export const moreOil = function ({ dispatch, commit, getters, rootGetters }, n) {
  commit(MORE_OIL, n)
/* 使用详解
  getters.someGetter // -> 'foo/someGetter'
  rootGetters.someGetter // -> 'someGetter'

  dispatch('someOtherAction') // -> 'foo/someOtherAction'
  dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

  commit('someMutation') // -> 'foo/someMutation'
  commit('someMutation', null, { root: true }) // -> 'someMutation'
  */
}

export const fewOil = ({ commit }, n) => {
  commit(FEW_OIL, n)
}

export const getAuthorName = ({ commit }) => {
  api.getAuthorName(name => commit('authorName', name))
}
