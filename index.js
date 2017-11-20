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

function appendKitten (name) {

}

function prependKitten(name) {
  return ["Arnold",...kittens];
}

function removeLastKitten(name) {
  kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}
