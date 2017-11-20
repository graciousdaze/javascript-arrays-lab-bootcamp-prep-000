const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(`Ralph`)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(`Bob`)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift()
}

function appendKitten(name) {
  return [kittens...,"Broom"];
}
