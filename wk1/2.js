let a = [1, 2, 3, 4, 5]
console.log(a)

a.push(6)
console.log(a)

a.pop()
console.log(a)

for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}

for (let element of a) {
  console.log(element)
}