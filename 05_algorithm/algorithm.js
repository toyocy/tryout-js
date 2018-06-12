function getSum(numbers) {
  let result = 0
  for (const number of numbers) {
    result += number
  }
  return result
}

function getAverage(numbers) {
  const sum = getSum(numbers)
  const result = sum / numbers.length
  return result
}

function getMaximum(numbers) {
  let result = 0
  for (const number of numbers) {
    if (result < number) {
      result = number
    }
  }
  return result
}

function getMinimum(numbers) {
  let result = numbers[0]
  for (const number of numbers) {
    if (result > number) {
      result = number
    }
  }
  return result
}

function ascending(numbers) {
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

function descending(numbers) {
// TODO: 2018/06/12 クイックソート実装予定

//   if (numbers.length < 1) {
//     return numbers
//   }

//   const pivot = numbers[0]
//   const left = []
//   const right = []

//   for(let i = 0; i <= numbers.length -1; i++){
//     if (numbers[i] <= pivot){
//       left[] += numbers[i]
//     }else{
//       right[] += numbers[i]
//     }
//   }

// ひとまずバブルソートで実装、別のアルゴリズムに置き換え
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = numbers.length - 1; j > i; j--) {
      if (numbers[j - 1] < numbers[j]) {
        const temp = numbers[j - 1]
        numbers[j - 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}

const numbers = [20, 31, 42, 13, 5, 38]
console.log('合計：' + getSum(numbers))
console.log('平均：' + getAverage(numbers))
console.log('最大値：' + getMaximum(numbers))
console.log('最小値：' + getMinimum(numbers))
console.log('昇順：' + ascending(numbers))
console.log('降順：' + descending(numbers))
