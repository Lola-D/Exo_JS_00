// Créé un script script_2.js qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur.

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?")
for(var i = nombre; i > 0; i--) {
  nombre *= i
}
console.log("Le résultat est : " + nombre)