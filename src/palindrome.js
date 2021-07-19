// Create a function that accepts a string and returns if it is a palindrome.
const isPalindrome = str => {
  if(typeof str === 'string') {
    const re = /[\W_]/g; // remove unwanted characters
  
    const lowStr = str.toLowerCase().replace(re, '')
  
    const revStr = lowStr.split('').reverse().join('')
  
    return revStr === lowStr ? true : false
  } else {
    const numStr = str.toString()
    
    const revStr = numStr.split('').reverse().join('')

    return numStr === revStr ? true : false
  }
}

// Test Data :
console.log(isPalindrome('Red rum, sir, is murder'))
console.log(isPalindrome('No lemon, no melon'))
console.log(isPalindrome('Eva, can I see bees in a cave?'))
console.log(isPalindrome('I come in peace!'))
console.log(isPalindrome(12345))
console.log(isPalindrome(72911927))