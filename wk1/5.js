let a = [1, 2, 3, 4, 5]

let b = a.map(x => x * 2)

console.log(b)

let c = a.filter(x => x > 3)

console.log(c)

let s = a.reduce((a, e) => a + e, 0)
console.log(s)