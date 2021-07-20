// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const removeDups = arr => {
  let result = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  return result
}

// Test Data :
console.log(removeDups([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]))