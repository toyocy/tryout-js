'use strict'

function toUry(hash) {
  const re = /foo/g
  const convert = 'uryyyy!!'

  for (const currentKey in hash) {
    if (!hash.hasOwnProperty(currentKey)) continue
    currentKey === 'text'
      ? (hash[currentKey] = hash[currentKey].toString().replace(re, convert))
      : toUry(hash[currentKey])
  }
  return hash
}

const hash = {
  main: {
    first: { text: 'foobar' },
    second: { text: 'fizzbuzz', child: { text: 'foobar' } },
  },
  sub: {
    first: { text: 'fizzbuzz', child: { text: 'foobar' } },
    second: {
      third: { text: 'barfoo', child: { text: 'foobar' } },
      forth: { child: { text: 'jit_foo_foo' } },
    },
  },
  text: 'foofava',
}

console.log(toUry(hash))
