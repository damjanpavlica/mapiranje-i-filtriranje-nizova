// const kvadriraj = x => x * x

// function kvadriraj(x) {
//   return x * x
// }

const niz = [4, 5, 44, 33, 44, 5, 6, 88, 99, 0, 55, 6, 22, 1]
const noviNiz = niz.map(x => x * x)
console.log(noviNiz)

const imena = ["Marija", "Darko", "Ana", "Milica"]
const mapiranaImena = imena.map(ime => `<h1>${ime}</h1>`)
console.log(mapiranaImena)
