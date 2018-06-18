'use strict'

const number = +window.prompt('数字を入力してください')
let msg
for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    msg = i % 15 === 0 ? 'FizzBuzz' : 'Fizz'
  } else {
    msg = i % 5 === 0 ? 'Buzz' : i
  }
  console.log(msg)
}
