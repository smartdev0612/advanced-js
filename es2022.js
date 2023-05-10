// .at
const arr = [100, 200, 400, 50000, 10]

console.log(arr[arr.length - 1])
console.log(arr.at(-2))
console.log(arr.at(0))
console.log(arr.at(-1))
console.log(arr.at(-3))

// Promise.all
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000))

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data))
