const findDups = arr => {
  let obj = {}

  for(let el of arr) {
    if(obj[el]) {
      obj[el] ++
    } else {
      obj[el] = 1
    }
  }

  let min = 1
  let reapeated = []
  for(let el of arr) {
    if(obj[el] > min) {
      reapeated.push(el)
    }
  }

  return reapeated.filter((item, index) => reapeated.indexOf(item) === index)
}

console.log(findDups([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]))