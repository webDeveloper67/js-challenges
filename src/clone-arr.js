// Write a JavaScript function to clone an array.

const cloneArr = arr => {
  let myArr = [].concat(...arr)
  return [...myArr]
}

// Test Data :
console.log(cloneArr([1, 2, 4, 0]))
console.log(cloneArr([1, 2, [4, 0]]))