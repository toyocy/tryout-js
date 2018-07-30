'use strict'

function rockPaperScissors(usersChoice) {
  const comChoice = Math.floor(Math.random() * Math.floor(3))
  const choice = ['グー', 'チョキ', 'パー']

  console.log(`あなた：${choice[usersChoice]}\nコンピュータ：${choice[comChoice]}`)

  if (usersChoice === comChoice) {
    return 'draw'
  }

  // ここをなんとかしたい。条件を簡潔に。
  if (
    (usersChoice === 0 && comChoice === 1) ||
    (usersChoice === 1 && comChoice === 2) ||
    (usersChoice === 2 && comChoice === 0)
  ) {
    return 'win'
  } else {
    return 'lose'
  }
}

let result
do {
  const usersChoice = +window.prompt('「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー')
  console.log('「ぽい！」')

  if (usersChoice < 0 || usersChoice > 2) {
    console.log('0 ~ 2 の数字を入力してください。')
    continue
  }
  result = rockPaperScissors(usersChoice)
  if (result === 'draw') {
    console.log('「アイコでしょ!」')
  }
} while (result === 'draw')

console.log(result === 'win' ? '「あなたの勝ち！」' : '「あなたの負け」')
