'use strict'

function recursiveAdd(result) {
  return result === 0 ? 0 : (result += recursiveAdd(result - 1))
}

const value = +window.prompt('数字を入力してください')
const result = !isNaN(value) ? recursiveAdd(value) : '数字が入力されませんでした。'
console.log(result)
