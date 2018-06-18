'use strict'

function recursiveAdd(result) {
  return result === 0 ? 0 : (result += recursiveAdd(result - 1))
}

let value

try {
  value = +window.prompt('数字を入力してください')
} catch (error) {
  console.log(error)
}

const recursvedResult = recursiveAdd(value)
console.log(recursvedResult)
