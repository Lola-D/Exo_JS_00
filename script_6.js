let arn = ["CCGUCGUUGCGCUACAGC", "CCUCGCCGGUACUUCUCG"]
let arnArray = []

for(let i = 0; i < arn.length; i++) {
  arnArray.push(arn[i].match(/.{1,3}/g))
}

for(let i = 0; i < arnArray.length; i++) {
  let acidesAnimes = []
  for(let j = 0; j < arnArray[i].length; j++) {
    if (arnArray[i][j] === "UCU" || arnArray[i][j] === "UCC" || arnArray[i][j] === "UCA" || arnArray[i][j] === "UCG" || arnArray[i][j] === "AGU" || arnArray[i][j] === "AGC") {
      acidesAnimes.push("Sérine")
    } else if (arnArray[i][j] === "CCU" || arnArray[i][j] === "CCC" || arnArray[i][j] === "CCA" || arnArray[i][j] === "CCG") {
      acidesAnimes.push("Proline")
    } else if (arnArray[i][j] === "UUA" || arnArray[i][j] === "UUG") {
      acidesAnimes.push("Leucine")
    } else if (arnArray[i][j] === "UUU" || arnArray[i][j] === "UUC") {
      acidesAnimes.push("Phénylalanine")
    } else if (arnArray[i][j] === "UAU" || arnArray[i][j] === "UAC") {
      acidesAnimes.push("Arginine")
    } else {
      acidesAnimes.push("Tyrosine")
    }
  }
  console.log(acidesAnimes)
}


