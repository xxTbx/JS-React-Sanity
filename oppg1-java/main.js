const add = document.getElementById("add");
const sort = document.getElementById("sort");
const liste = document.querySelector("ul");

//Tom arrayer
const numberList = [];

//Finner 4 random tall
const randomNumbers = () => {
  //Lånt kode
  for (var i=0; i<4; i++) {
    numberList.push(Math.round(Math.random() * 9)) //Pusher til tom array
  }
  //Lånt kode slutt
}

//Lister ut Array 
const generateRandomNumbers = () => {
  numberList.length = 0; //Tømmer array
  liste.innerHTML = ""; //Tømmer liste
  randomNumbers(); //Henter functionen for tall å bruke
  numberList.forEach((numbers) => (liste.innerHTML += `<li>${numbers}</li>`)); //Lister ut tall
};

//Sorterer Array
const sortRandomNumbers = () => {
  numberList.sort() //Sorterer array
  numberList.push() //Update array
  liste.innerHTML = ""; //Tømmer liste
  numberList.forEach((numbers) => (liste.innerHTML += `<li>${numbers}</li>`)); //Lister ut tall
}
console.log(numberList)

add.addEventListener("click", generateRandomNumbers);
sort.addEventListener("click", sortRandomNumbers);

//Starterside
generateRandomNumbers()

//Ressurser brukt:
/*
For å tømme en array før bruk:
https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript

Random tall 0-9:
https://www.w3schools.com/js/js_random.asp

Til div Array søk:
https://developer.mozilla.org/en-US/

https://xn--fullstkk-o0a.no/courses/

https://github.com/mariuswallin/UIN_2022
*/