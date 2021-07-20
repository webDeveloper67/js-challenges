// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

const sumTwoArr = (arr1, arr2) => {
  let sum = []
  for(let i = 0; i <= (arr1.length || arr2.length); i++) {
    sum.push((arr1[i] || 0) + (arr2[i] || 0))
  }
  return sum
}

console.log(sumTwoArr([1,0,2,3,4], [3,5,6,7,8,13]))
// [4, 5, 8, 10, 12, 13] 