// Bigint
console.log(1n + 2n)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(9007199254740991 + 10) // => Wrong!
console.log(9007199254740991n + 10n)

console.log(typeof 3n)

// Optional Chaining Operator: ?
let will_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6,
  },
}

let daniel_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: -1,
  },
}

let weight = will_pokemon.pikachu.weight
console.log('weight', weight)

let raichu_weight = daniel_pokemon?.pikachu?.weight
console.log('weight', raichu_weight)

// Nullish Coalescing Operator ??
let weight2 = daniel_pokemon?.raichu?.power ?? 'Hello'
console.log(weight2)
