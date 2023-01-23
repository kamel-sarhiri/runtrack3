// Récupération du contenue d'un json avec un key
//attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // méthode avec Fetch pour fichier externe
  function jsonValueKey(file, key) {
    fetch(file)
      .then((response) => response.json())

      .then((response) => {
        const value = response[key];
        console.log(value);
      });
  }

  jsonValueKey("texte.json", "city");
});
