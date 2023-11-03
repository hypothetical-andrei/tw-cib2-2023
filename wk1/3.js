let o = {
  name: 'jim',
  age: 29
}

console.log(o)

for (const prop in o) {
  console.log(o[prop])
}