export default {
  oil: state => state.oil,
  speed (state, getters, rootState, rootGetters) { // 方法的简写
    return state.oil * rootState.gasRate
  },
  temperature: function (state, getter, rootState, rootGetters) {
    return state.oil * rootGetters.temperatureRate
  },
  authorName: state => state.authorName
}

/* 上面的导入方式： import getters from './getters'  不要这样导入  import * as getters from './getters'
* 还可以写成下面的方式：
* const getters = {}
* export default getters
* */
