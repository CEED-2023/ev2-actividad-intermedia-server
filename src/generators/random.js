import randSeed from 'rand-seed'
const Rand = randSeed.default // there is something weird in package exports

let rand = new Rand()

function setSeed(seed) {
  rand = new Rand(seed)
}

function random() {
  return rand.next()
}

function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(random() * (max - min + 1)) + min
}

// WARNING: take in account that, if you use this in async code,
// you will need to set the seed again, because the seed is shared
export {
  setSeed,
  random,
  randomInt
}
