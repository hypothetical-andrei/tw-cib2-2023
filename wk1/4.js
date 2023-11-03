function doubleMe(x) {
  return x * 2
}

console.log(doubleMe(2))
console.log(doubleMe(3, 4))

let doubleMe2 = function(x) {
  return x * 2
}

console.log(doubleMe2(2))

let doubleMe3 = (x) => {
  return x * 2
}

let doubleMe4 = (x) => x * 2
