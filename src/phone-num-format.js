// Write a function that accepts a string of numbers or a number and converts it to a US phone number format. 
const phoneNumFormat = input => {
  if(!input || isNaN(input)) `input must be a number. You send ${input}`
  if(typeof input !== 'string') input = input.toString()
  if(input.length === 10) {
    return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
  }
  if(input < 10 || input > 10) {
    return `input must be 10 digit`
  }
}

console.log(phoneNumFormat(2359654134))
console.log(phoneNumFormat('2359654144'))
console.log(phoneNumFormat('2359'))
console.log(phoneNumFormat('2359563463433767'))

