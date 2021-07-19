// Write a function that accepts an array of numbers or strings this can be an array with any number of nested arrays. Flatten the array (make all one level), put it in numerical order of distinct numbers from the original array 

const flatten = (...args) => {
  let arr = args.flat(4)
  
  let result = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  return result.sort((a, b) => a - b)
}

// Test Data :
console.log(flatten([1, 1, 5, 9]))
console.log(flatten([20, [3, 5], 10]))
console.log(flatten([[1,2,3],[[4,5],6,[7,8,9], 19, 21, [0, 1], ]]))
console.log(flatten(['Marv', ['Dakota', 'Boo'], 'Dakota']))
console.log(flatten(['Happy', [['New'], ['Year']]]))