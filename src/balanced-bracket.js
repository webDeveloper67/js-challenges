// Given a string containing brackets, determine if all brackets have a matching counterpart. If all brackets in the string form balanced pairs, return true. If not, return false

const balancedBracket = str => {
  let arr = str.split("");

  let obj = {};

  for (let el of arr) {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }

  let objVals = Object.values(obj)
   
  let result = objVals.reduce((total, currAmo) => {
    return total + currAmo
  })

  if(result % 2 === 0) {
    return true
  } else {
    return false
  }
}

// Test Data :
console.table(balancedBracket("[()]{}[{({})()]()}"))
console.table(balancedBracket("[)]{}[{(()}"))