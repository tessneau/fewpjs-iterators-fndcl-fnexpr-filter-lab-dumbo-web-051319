// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(name => name.slice(0,2) === string)
}

function matchName(drivers, string) {
  return drivers.filter(obj => obj.name === string)
}
