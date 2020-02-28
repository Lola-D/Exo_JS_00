const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/////////////////////

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

compteur = 0
for(i = 0; i < books.length; i++) {
  if (books[i].rented != 0) {
    compteur++
  } 
}
if (compteur === 12) {
  console.log("=> Oui")
} else {
  console.log("=> Non")
}

/////////////////////

console.log("Quel est livre le plus emprunté ?")

let lePlusEmprunte = books[0].rented
let leMoinsEmprunte = books[0].rented

books.forEach(function(keyValue, index, books) {
  if(index > 0) {
    if(keyValue.rented < leMoinsEmprunte){
      leMoinsEmprunte = keyValue.title
    }
    if(keyValue.rented > lePlusEmprunte) {
      lePlusEmprunte = keyValue.title
    }
  }
})

console.log("=> " + lePlusEmprunte)

/////////////////////

console.log("Quel est le livre le moins emprunté ?")

console.log("=> " + leMoinsEmprunte)

/////////////////////

console.log("Trouve le livre avec l'ID: 873495")

let findId = books.find(book => book.id === 873495)

console.log("=> " + findId.title)

/////////////////////

console.log("Supprime le livre avec l'ID: 133712")

for( let i = 0; i < books.length; i++) {
  if (books[i] === findId) {
    books.splice(i, 1)
  }
}

/////////////////////

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")

books.sort((a, b) => a.title > b.title ? 1 : -1)

console.log(books)




