// #### START HER ####
const startHere = "Her kommer din kode";

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// #### START HER ####
const ulList = document.querySelector("ul");
const button = document.getElementById("test");

//arrayer
let fourRandomWords = []; //4 random ord
let unSortedList = []; // usortert ord (unødvendig)

const randomWords = () => { //Finner 4 random ord
    for (var i=0; i<4; i++) {
        const words = wordList[Math.floor(Math.random() * wordList.length)]
        fourRandomWords.push(words)
        unSortedList.push(words)
    }
}

const sortWords = () => { //Sortere random Word
    fourRandomWords.sort()
    fourRandomWords.push()
}

const generateRandomWords = ()  => { //Printer ut 4 random ord i random rekkefølge
    ulList.innerHTML = ""; //Tømmer liste
    fourRandomWords.forEach((words, index) => (ulList.innerHTML += `<li><input type="text" id="${index}" /><span>${words}</span></li>`));
}

const guessedInput = () => {
    const test = document.getElementById("0").value;
    const test1 = document.getElementById("1").value;
    const test2 = document.getElementById("2").value;
    const test3 = document.getElementById("3").value;
  
    //Sjekker om alle er rett
    if(unSortedList[0] === fourRandomWords[test-1] && 
      unSortedList[1] === fourRandomWords[test1-1] && 
      unSortedList[2] === fourRandomWords[test2-1] &&
      unSortedList[3] === fourRandomWords[test3-1] ){
      console.log("Alle er riktige")
      button.style.backgroundColor = correctColor;
      button.innerHTML = correctText;
      button.addEventListener("click", nyRunde)
    } //Sjekker om noen av inputene er tomme
    else if(
      test == 0 || test1 == 0 || test2 == 0 || test3 == 0 ||
      test == undefined || test1 == undefined || test2 == undefined || test3 == undefined ||
      test == "" || test1 == "" || test2 == "" || test3 == ""
      ){
      console.log("Noe er ikke fylt inn")
      button.style.backgroundColor = failColor;
      button.innerHTML = failText;
    } //Sjekker om feilen er at noe er av typen string
    else if(typeof test === "string" || typeof test1 === "string" || typeof test2 === "string" || typeof test3 === "string") {
      console.log("Noe er ikke et tall")
      button.style.backgroundColor = failColor;
      button.innerHTML = failText;
    } //Sjekker om 1 eller flere er feil
    else if(unSortedList[0] !== fourRandomWords[test-1] ||
      unSortedList[1] !== fourRandomWords[test-1] ||
      unSortedList[2] !== fourRandomWords[test-1] ||
      unSortedList[3] !== fourRandomWords[test-1] ){
      console.log("1 eller flere er feil")
      button.style.backgroundColor = failColor;
      button.innerHTML = failText;
    }
  }
//Restarter
const nyRunde = () => {
  fourRandomWords = [];
  unSortedList = [];
  button.style.backgroundColor = null;
  button.innerHTML = "Test";

  console.log(fourRandomWords)
  console.log(unSortedList)

  randomWords()
  generateRandomWords()
  sortWords()
}

randomWords()
generateRandomWords()
sortWords()

button.addEventListener("click", guessedInput)

console.log(fourRandomWords)
console.log(unSortedList)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// https://stackoverflow.com/questions/50023291/add-id-to-array-of-objects