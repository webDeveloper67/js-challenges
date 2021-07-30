// Create a function that accepts a string and a number. The function must return the given string truncated to the maximum length (number that was passed in) followed by "...".  If the string is shorter than the passed maximum length return the passed string.

const truncateStr = (str, limit) => {
  if(str.length < limit) {
    return str
  } else {
    let result = str.substr(0, limit)
    return `${result}...`
  }
}

console.log(truncateStr('It works on my machine', 8))
console.log(truncateStr('It’s not a bug – it’s an undocumented feature', 14))
console.log(truncateStr('The cheapest, fastest, and most reliable components are those that aren’t there', 82))