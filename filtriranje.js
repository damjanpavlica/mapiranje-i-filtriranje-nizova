const brojevi = [4, 5, 44, 33, 44, 5, 6, 88, 99, 0, 55, 6, 22, 1]
const imena = ["Marija", "Darko", "Ana", "Milica"]

// brojevi veci veci od 17
const punoletni = brojevi.filter(x => x > 17)
console.log(punoletni)

// imena duza od tri karaktera
console.log(imena.filter(ime => ime.length > 3))

// imena koja pocinju na M
console.log(imena.filter(ime => ime.startsWith("M")))
