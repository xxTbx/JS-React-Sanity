/**
  Step 1:
   - Forrige knappen er skjult (hidden attr er aktive)
   - Kun steg 1 i nav er grønn (har klassen active)
   - Skjema for navn vises
  Step 2:
   - Forrige knappen er synlig (hidden attr er borte)
   - Kun steg 2 i nav er grønn (har klassen active)
   - Skjema for epost vises
  Step 3:
   - Forrige knappen er synlig
   - Kun steg 3 i nav er grønn (har klassen active)
   - Skjema for alder vises
   - Neste knappen er skjult (hidden attr er aktive)dd
   - Send knappen er synlig (hidden attr er borte)
  Step 4:
   - Skjema er skjult
   - Kun teksten "Takk ditt skjema er sendt" vises og lages med JavaScript
  Next:
   - Skal endre hvilket step vi er på (hvilket steg som er grønt)
   - Skal trigge validering av skjema
     - Skal vise feilmelding "Feil" hvis validering feiler
     - Skal fjerne feilmelding "Feil" hvis validering passerer etter at vi har hatt en feil (legge til hidden attr)
          - Validering for navn er mellomrom og mer enn 10 bokstaver
          - Validering for e-post er at den må ha en @
          - Validering for alder er over 20
   - Skal lagre det vi skrev i skjema
  Prev:
   - Skal endre hvilket steg vi er på
   - Skal fortsatt vise det vi har skrevet i input
 */

// #### START HER ####
const startHere = "Her kommer din kode";


//knapp og feilmeldingen
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
//Tar også ut via Id, fordi "style.display" ikke fungerte på class
const prevButtonId = document.getElementById("prev")
const nextButtonId = document.getElementById("next")

//Alle formene
const formSteps = document.querySelectorAll('.form-step');
//navigasjonene
const nav = document.getElementById("navbar");
//Elementene i navigasjone
const navSteps = document.querySelectorAll(".step")

//Til å starte med skal tilbake knapp og error ikke vises
prevButtonId.style.display = "none";
error.style.display = "none";
error1.style.display = "none";
error2.style.display = "none";

//Determineere hvilken form vi er på
let level = 0


//Funkjson for knappen
nextButton.addEventListener("click", () => {
  //Krav for første form:
  if(level == 0) {
    const names = document.getElementById("name").value;
    
    if(names.length > 10 && names.indexOf(' ') >= 1) {
      updateForm();
      updateNavbar();
      prevButtonId.style.display = "block";
      error.style.display = "none";
    }
    else {
      console.log("feil 1")
      error.style.display = "block";
    }
  }
    
  //Krav for andre form
  else if(level == 1) {
    let email = document.getElementById("email").value;
    if(email.includes('@')) {
      updateForm();
      updateNavbar();
      email.value = null;
      error1.style.display = "none";
    }
    else {
      error1.style.display = "block"
    }
  }
    
  //Krav for tredje form
  else if(level == 2) {
    let age = document.getElementById("age").value;
    if(age >= 18) {
      updateForm();
      error2.style.display = "none";
    }
    else {
      error2.style.display = "block";     
    }
  }
});


//Løkke for tilbake knappen
prevButton.addEventListener("click", () => {  
  if(level > 0) {
    level--;
    prevButton.style.display = "none"
    updateForm(true);
    updateNavbar();
  }
})
  

//Funksjon som skal oppdatere visningen av de ulike forms
function updateForm(prev) {
  if(!prev) level++
  
  level === 2 ? nextButton.innerHTML = "Send" : nextButton.innerHTML = "Neste"

  //Løkke som endrer på active form
  formSteps.forEach(formStep => {
    formStep.classList.contains("form-step-active") &&
    formStep.classList.remove("form-step-active");
  })

  //Form skal kun bli oppdatert hvis vi er på step mindre enn 3
  if(level < 3) {
  formSteps[level].classList.add("form-step-active")
  }

  //Hvis ikke er skjema ferdig
  else {
    nextButtonId.style.display = "none";
    prevButtonId.style.display = "none";
    nav.style.display = "none";
    var h1 = document.createElement("H1");
    var text = document.createTextNode("Takk ditt skjema er sendt");
    h1.appendChild(text);
    document.body.appendChild(h1);
  }
}

//funksjon som skal oppdatere navigasjonen ut ifra, current form
function updateNavbar() {
  navSteps.forEach((navStep, index) => {
    if(index === level ) {
      navStep.classList.add("active")
    } 
    else {
      navStep.classList.remove("active")
    }
  })
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://xn--fullstkk-o0a.no/courses/moderne-javascript/




  
    