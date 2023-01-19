// la fonction "getValue" est utilisée pour récupérer la valeur d'un champ de date saisi par l'utilisateur dans un formulaire HTML
function getValue() {
  let input = document.getElementById("date").value; //La fonction utilise l'élément "date" de l'ID pour récupérer la date saisie par l'utilisateur
  //   console.log(input)

  function jourtravaille(date) {
    // console.table(date);

    //permet de traduire le datetime en français et en string
    let options = {
      //déclaration de l'objet "options"
      month: "long", // format toutes lettres
      day: "numeric",
      weekday: "long",
      year: "numeric",
    };
    let dateFR = new Date(date); //déclaration de la variable "dateFR" qui contient la date saisie par l'utilisateur
    let stringFR = dateFR.toLocaleDateString("fr-FR", options); //déclaration de la variable "stringFR" qui contient la date saisie par l'utilisateur en français
    // console.log(stringFR);

    const words = stringFR.split(" "); // déclaration de la variable "words" qui contient la date saisie par l'utilisateur en français et qui est séparée par des espaces
    let jourString = words[0]; // déclaration de la variable "jourString" qui contient le premier élément du tableau "words"
    let jourInt = words[1]; // déclaration de la variable "jourInt" qui contient le deuxième élément du tableau "words"
    let mois = words[2]; // déclaration de la variable "mois" qui contient le troisième élément du tableau "words"
    let années = words[3]; // déclaration de la variable "années" qui contient le quatrième élément du tableau "words"

    let jourMois = jourInt + " " + mois; // déclaration de la variable "jourMois" qui contient le jour et le mois de la date saisie par l'utilisateur
    // console.log(jourMois);

    // tableau des jours fériés de 2023
    let joursFeries = [
      "1 janvier",
      "10 avril",
      "1 mai",
      "8 mai",
      "18 mai",
      "29 mai",
      "14 juillet",
      "15 août",
      "1 novembre",
      "11 novembre",
      "25 décembre",
    ];

    if (jourString == "samedi" || jourString == "dimanche") {
      // si le jour de la date saisie par l'utilisateur est un samedi ou un dimanche
      console.log(
        "Non, " +
          jourString +
          " " +
          jourMois +
          " " +
          années +
          " est un week-end."
      );
    } else if (joursFeries.includes(jourMois)) {
      // sinon si le jour de la date saisie par l'utilisateur est un jour férié
      console.log(
        "Le " + jourString + " " + jourMois + " " + années + " est férié."
      );
    } else {
      // sinon
      console.log(
        "Oui, " +
          jourString +
          " " +
          jourMois +
          " " +
          années +
          " est un jour travaillé."
      );
    }
  }

  jourtravaille(input); // script permettant d'afficher si un jour au format Date est un jour travaillé ou non (week-end ou férié)
}
