/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ESERCIZIO 01");

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 02");

console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 03");

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 04");

let firstElement = pets.slice(0, 1);
pets.shift();
pets.push(firstElement[0]); //Alternativa ---> pets.splice(pets.length, 0, firstElement[0]);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("ESERCIZIO 05");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licencePlate = "GN928PX";
  console.log(cars[i]);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 06");

const newObj = {
  brand: "Audi",
  model: "A3",
  color: "gray",
  trims: ["business", "RS", "advance"],
};

cars.push(newObj);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
  console.log("Trims:", i, cars[i].trims);
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 07");

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.slice(0, 1));
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 08");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.toLowerCase().charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO 09");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("ESERCIZIO 10");

const charactersArray = ["g", "n", "u", "z", "d"];
const positionArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i].toLowerCase()) {
    case "a":
      positionArray.push("1");
      break;
    case "b":
      positionArray.push("2");
      break;
    case "c":
      positionArray.push("3");
      break;
    case "d":
      positionArray.push("4");
      break;
    case "e":
      positionArray.push("5");
      break;
    case "f":
      positionArray.push("6");
      break;
    case "g":
      positionArray.push("7");
      break;
    case "h":
      positionArray.push("8");
      break;
    case "i":
      positionArray.push("9");
      break;
    case "l":
      positionArray.push("10");
      break;
    case "m":
      positionArray.push("11");
      break;
    case "n":
      positionArray.push("12");
      break;
    case "o":
      positionArray.push("13");
      break;
    case "p":
      positionArray.push("14");
      break;
    case "q":
      positionArray.push("15");
      break;
    case "r":
      positionArray.push("16");
      break;
    case "s":
      positionArray.push("17");
      break;
    case "t":
      positionArray.push("18");
      break;
    case "u":
      positionArray.push("19");
      break;
    case "v":
      positionArray.push("20");
      break;
    case "z":
      positionArray.push("21");
      break;
  }
}
console.log(positionArray);
