// déclaration des variables
let numbers = [6, 12, 4, 8, 10, 3, 7, 9, 1];
// asc ou desc
let order = "asc";
// let order = "desc";

// déclaration de la fonction (algo tri a bulle)
function tri(numbers, order) {
  // console.log(numbers);
  // console.log(order);

  // boucle pour trier le tableau si order = "asc"
  if (order == "asc") {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
  }
  // boucle pour trier le tableau si order = "desc"
  if (order == "desc") {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
  }
  return numbers;
}

// appel de la fonction
console.log(tri(numbers, order));
