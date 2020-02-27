let ask = prompt("Que veux tu dire ?")

if (ask.charAt(ask.length - 1) === "?") {
  console.log("Ouais, ouais...")
} else if (ask.match(/\B[A-Z]\b/g)) {
  console.log("Pwa, calme-toi...")
} else if (ask.match(/Fortnite/gi)) {
  console.log("On s' fait une partie soum-soum ?")
} else if (ask === "") {
  console.log("T'es en PLS ?")
} else {
  console.log("Balek")
}
