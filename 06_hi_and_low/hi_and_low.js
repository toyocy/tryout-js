const answer = Math.floor(Math.random() * Math.floor(100))
let number = +window.prompt('0 - 100 で数字を当てて')
console.log(number)

let tryCount = 1
let msg
while (answer !== number) {
  number > answer ? (msg = 'もっと下') : (msg = 'もっと上')
  console.log(msg)
  number = +window.prompt(`${msg}です`)
  console.log(number)
  tryCount++
}
console.log(`正解！・・・${tryCount}回目で当てました`)
