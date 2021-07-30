// Write a JavaScript function to find the longest common starting substring in a set of strings.

const longestCommonStr = arr => {
  let myArr = arr.concat().sort()
  
  let a1 = myArr[0]

  let a2 = myArr[myArr.length-1]

  let L = a1.length
  // console.log(L, 'LLLL')

  let i= 0;
  while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
  return a1.substring(0, i);

}

console.log(longestCommonStr(['interspecies', 'interstttterwq', 'intersutorial']))
console.log(longestCommonStr(['sqlqInjection', 'sqlqTutorial', 'interssssserer']))
console.log(longestCommonStr(['go', 'google']))