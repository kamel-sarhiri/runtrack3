// déclaration de la variable dans un tableau contenant l'ensemble des jours de la semaine
let jours = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

// déclaration de la fonction
function afficherjourssemaines() {
  for (let i = 0; i < jours.length; i++) {
    console.log(jours[i]);
  }
}

// appel de la fonction
afficherjourssemaines();
