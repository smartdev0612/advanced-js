// ES10 - flat
const array3 = [1, 2, [3, 4, [5]]]
const flated_array = array3.flat(2)
// console.log(flated_array)

const entries = ['bob', 'sally', , , , , 'cindy']
// console.log(entries.flat())

const array3Chaos = array3.flatMap((creature) => creature + '1')
// console.log(array3Chaos)

const userEmail = '   hell@mail.com'
const userEmail1 = 'hello@gmail.com       '
console.log(userEmail.trimStart())
console.log(userEmail1.trimEnd())

userProfiles = [
  ['commanderTom', 23],
  ['derekZlander', 40],
  ['Gerad', 35],
]
const obj = Object.fromEntries(userProfiles)
console.log(Object.entries(obj))
