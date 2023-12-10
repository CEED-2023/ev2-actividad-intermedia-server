import randSeed from 'rand-seed';
const Rand = randSeed.default // there is something weird in package exports

let rand = new Rand();

function setSeed(seed) {
  rand = new Rand(seed);
}

function random() {
  return rand.next();
}

export {
  setSeed,
  random
}
