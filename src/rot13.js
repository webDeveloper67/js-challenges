const rot13 = str => {
  let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let result = str.replace(/[a-z]/gi, char => {
    return alpha[alpha.indexOf(char) + 13]
  })
  return result
}

console.log(rot13("Hello Dev World is awesome"))
console.log(rot13("#365DaysOfCoding"))