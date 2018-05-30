function createHash(string, separator) {
  const arrayOfString = string.split(separator)
  let hashOfString = {}

  for (const item of arrayOfString) {
    hashOfString += item + ':' + item.length + ','
  }

  console.log(hashOfString.slice(0, -1))
}

const input = window.prompt('文字列を入力してください')
const space = ' '
createHash(input, space)
