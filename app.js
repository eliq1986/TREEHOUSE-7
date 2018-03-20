const qwertyDiv = document.getElementById("qwerty");
const startGame = document.querySelector("a");
const phraseDisplay = document.querySelector("ul");
const overlay = document.getElementById("overlay");
const phrasesArr = ["abcde",
                    "may the force be with you",
                    "much to learn you still have",
                    "join the dark side we have cookies",
                    "use the force"];
let missed = 0;

startGame.addEventListener("click", () => { // removes startup screen
    overlay.style.display = "none";
});

function randomNumber() { //Generates random number
    return Math.floor(Math.random() * 5);
}

function getRandomPhraseArray(arr) { //gets random phrase and turns it into an array of letters
    let splitArray = arr[randomNumber()];
    return splitArray = splitArray.split([ , ]);
}

 const phraseArray = getRandomPhraseArray(phrasesArr); //array of letters gets captured by a variable

function addPhraseToDisplay(arr) { //adds random phrease to display
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li"); //creates an "li" element for each letter
        li.textContent = arr[i];
        phraseDisplay.appendChild(li);
       if (li.textContent !== " ") {
            li.className = "letter";
        } else {
            li.className = "space";
                }

    }
  }
function checkLetter(buttonClicked) {
    let letter;
    const elementsWithClass = document.getElementsByClassName("letter");
    for (let i = 0; i < elementsWithClass.length; i++) {
        if (elementsWithClass[i].textContent === buttonClicked.textContent) {
           elementsWithClass[i] = elementsWithClass[i].classList.add("show");
             letter = elementsWithClass[i];


       }



    }
     return letter;
  }
qwertyDiv.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
          const button = event.target;
          button.className = "chosen";
            button.disabled = "true";
          let letterFound = checkLetter(button);
          if (letterFound === undefined) {
            let hearts = document.getElementsByClassName("tries");
             for (let i  = 0; i < hearts.length; i++){
            let parent = hearts[i].parentNode;
            parent.removeChild(hearts[i]);
            break;
}



}
}
  });
  addPhraseToDisplay(phraseArray);
