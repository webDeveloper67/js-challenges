// Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

const indexIndicatorSum = (arr, target) => {
  let firstInx;
  let secondInx;

  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] + arr[i + 1] === target) {
      
      firstInx = arr.indexOf(arr[i])
      secondInx = arr.indexOf(arr[i + 1])
    }
  }

  return [firstInx, secondInx]
}

// Test Data :
console.log(indexIndicatorSum([10,20,10,40,50,60,70], 50))