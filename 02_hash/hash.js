'use strict'

const createHash = (string, separator) => {
  const arrayOfString = string.split(separator)
  const hashOfString = arrayOfString.reduce((a, x) => {
    if (!a[x]) a[x] = []
    a[x] = x.length
    return a
  }, {})
  return hashOfString
}
const input = window.prompt('文字列を入力してください')
const space = ' '
console.log(createHash(input, space))
