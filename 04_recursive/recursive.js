function recursiveAdd(result) {
  if (result === 0) {
    return 0
  } else {
    return (result += recursiveAdd(result - 1))
  }
}

const value = window.prompt('数字を入力してください')
const recursvedResult = recursiveAdd(Number(value))
console.log(recursvedResult)
