const qwertyDiv = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector("a");
const phraseDisplay = document.querySelector("ul");
const overlay = document.getElementById("overlay");
const keyButton = document.getElementsByTagName("button");
const phrasesArr = ["abcdefg", "may the force be with you", "much to learn you still have", "join the dark side we have cookies", "use the force"]
let missed = 0;

startGame.addEventListener("click", function() { // removes startup screen
  overlay.style.display = "none";
});

function randomNumber() { //Generates random number
return Math.floor(Math.random() * 5);
}

function getRandomPhraseArray(arr) {  //gets random phrase and turns it into an array of letters
   let splitArray =  arr[randomNumber()];
   return splitArray = splitArray.split([,]);
}
const phraseArray = getRandomPhraseArray(phrasesArr); //array of letters gets captured by a variable

function addPhraseToDisplay(arr) { //adds random phrease to display
  for (let i = 0; i < arr.length; i++) {
      let li = document.createElement("li"); //creates an "li" element for each letter
      li.textContent = arr[i];
      phraseDisplay.appendChild(li);

    if (li.textContent !== " ") {
       li.className = "letter";
  }
  else {
  li.className = "space";

  }
}
}

function checkLetter(buttonClicked) {
 const elementsWithClass = document.getElementsByClassName("letter");
    for (let i = 0; i < elementsWithClass.length; i++) {
          if (elementsWithClass[i].textContent == buttonClicked.textContent) {
               let correctElement = elementsWithClass[i];
                correctElement.className = "show";

           }


       }
}

qwertyDiv.addEventListener("click", (event) => {
       if (event.target.tagName === "BUTTON") {
         event.target.className = "chosen";
          const button = event.target;
          const right = checkLetter(button);
         button.disabled = "true";
          let letterFound = button;
          return letterFound;

            }
          });
addPhraseToDisplay(phraseArray);
