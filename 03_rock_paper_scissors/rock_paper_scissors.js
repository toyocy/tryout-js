function getRundom(max = 3) {
  return Math.floor(Math.random() * Math.floor(max)).toString()
}

// 0:グー 1:チョキ 2:パー
const choice = ['グー', 'チョキ', 'パー']

let message = ''
for (const item of choice) {
  message += choice.indexOf(item) + '.' + item + ' '
}

function rockPaperScissors() {
  console.log('「じゃんけん・・・」')
  console.log(message)

  const usersChoice = window.prompt(message)
  if (choice[usersChoice] === undefined) {
    return
  }

  console.log('「ぽい！」')
  const comChoice = getRundom()
  console.log('あなた：' + choice[usersChoice])
  console.log('コンピュータ：' + choice[comChoice])
  if (usersChoice === comChoice) {
    return 'draw'
  }

  if (
    (usersChoice === '0' && comChoice === '1') ||
    (usersChoice === '1' && comChoice === '2') ||
    (usersChoice === '2' && comChoice === '0')
  ) {
    return 'win'
  } else {
    return 'lose'
  }
}

let result
do {
  result = rockPaperScissors()
  if (result === 'draw') {
    console.log('「アイコでしょ!」')
  }
} while (result === 'draw')

if (result === 'win') {
  console.log('「あなたの勝ち！」')
} else if (result === 'lose') {
  console.log('「あなたの負け」')
} else {
  console.log('正しい手が出ませんでした')
}
