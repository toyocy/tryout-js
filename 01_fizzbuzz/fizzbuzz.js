const number = +(window.prompt('数字を入力してください'))
let msg
for (let i = 1; i <= number; i++) {
  if(i%3 === 0){
    i%15 === 0? msg='FizzBuzz': msg = 'Fizz'
  }else{
    i%5===0? msg='Buzz':msg = i
  }
  console.log(msg)
}
