'use strict'

// 三項演算子をネスト。かえって見づらいかも。。。
const number = +window.prompt('数字を入力してください')
for (let i = 1; i <= number; i++) {
  console.log(i % 3 === 0 ? (i % 15 === 0 ? 'FizzBuzz' : 'Fizz') : i % 5 === 0 ? 'Buzz' : i)
}
