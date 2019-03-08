export const gasRateUp = state => {
  state.gasRate = state.gasRate + 1
  return state.gasRate // 不需要返回值，也不必写成箭头函数方式
}
export const gasRateDown = state => {
  state.gasRate = state.gasRate - 1
  if (state.gasRate < 1) {
    state.gasRate = 1
  }
  return state.gasRate
}
