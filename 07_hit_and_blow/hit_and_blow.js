'use strict'

function createAnswer() {
  const answer = []
  let i = 0
  do {
    const number = Math.floor(Math.random() * Math.floor(10))
    if (answer.indexOf(number) === -1) {
      answer[i] = number
      i += 1
    }
  } while (i <= 3)

  // デバッグ用
  // console.log(`answer is ${answer}`)
  return answer
}

function checkHit(userInput, answer) {
  let hitCount = 0
  for (let i = 0; i <= answer.length - 1; i++) {
    if (+userInput[i] !== answer[i]) {
      continue
    }
    hitCount += 1
  }
  return hitCount
}

function checkBlow(userInput, answer) {
  let blowCount = 0
  for (let i = 0; i <= answer.length - 1; i++) {
    if (answer.indexOf(+userInput[i]) === -1) {
      continue
    }
    blowCount += 1
  }
  return blowCount
}

let hitCount = 0
let tryCount = 0
const answer = createAnswer()
do {
  const userInput = window.prompt('4桁の数字は？')
  console.log(userInput)
  const userAnswer = userInput.split('')

  hitCount = checkHit(userAnswer, answer)
  const blowCount = checkBlow(userAnswer, answer)
  if (hitCount !== 4) {
    console.log(`外れ：${hitCount}Hits, ${blowCount - hitCount}Blow`)
  }
  tryCount += 1
} while (hitCount < 4)
console.log(`${tryCount} 回で正解！`)
