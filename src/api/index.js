const data = 'kevin huang'

export function getAuthorName (callback) {
  callback(data) // 为什么data换成'kevin huang' ESLint报错
}
