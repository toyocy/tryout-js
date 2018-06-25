'use strict'

const numbers = [20, 31, 42, 13, 5, 38]

const sum = numbers => numbers.reduce((a, x) => (a += x), 0)
const average = numbers => sum(numbers) / numbers.length

// もう少し簡潔にできそう
const maximum = numbers => {
  let result = 0
  for (const number of numbers) {
    if (result < number) {
      result = number
    }
  }
  return result
}

// こっちももう少し簡潔にできそう
const minimum = numbers => {
  let result = numbers[0]
  for (const number of numbers) {
    if (result > number) {
      result = number
    }
  }
  return result
}

// バブルソートで実装
const ascending = numbers => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = numbers.length - 1; j > i; j--) {
      if (numbers[j - 1] > numbers[j]) {
        const temp = numbers[j - 1]
        numbers[j - 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}

// クイックソートで実装
const descending = numbers => {
  if (numbers.length < 1) {
    return numbers
  }

  const pivot = numbers[0]
  let left = []
  let right = []

  for (let i = 1; i <= numbers.length - 1; i++) {
    numbers[i] >= pivot ? left.push(numbers[i]) : right.push(numbers[i])
  }

  left = descending(left)
  right = descending(right)
  return left.concat(pivot, right)
}

console.log('合計：' + sum(numbers))
console.log('平均：' + average(numbers))
console.log('最大値：' + maximum(numbers))
console.log('最小値：' + minimum(numbers))
console.log('昇順：' + ascending(numbers))
console.log('降順：' + descending(numbers))
