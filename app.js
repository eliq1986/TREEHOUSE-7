const qwertyDiv = document.getElementById("qwerty");
const startGame = document.querySelector("a");
const phraseDisplay = document.querySelector("ul");
const overlay = document.getElementById("overlay");
const lose = document.querySelector("h2");

const phrasesArr = ["Do or do not",
    "May the force be with you",
    "Much to learn you still have",
    "Join the dark side we have cookies",
    "Use the force"
];
let missed = 0;
/*********************************************************
 * FUNCTION
 * Removes startup screen
 *********************************************************/
startGame.addEventListener("click", () => { // removes startup screen
    overlay.style.display = "none";
});
/*********************************************************
 * FUNCTION
 * Grabs random quote and splits it into an array of characters
 *********************************************************/
function getRandomPhraseArray(arr) { //gets random phrase and turns it into an array of letters

 function randomNumber() { //Generates random number
      return Math.floor(Math.random() * arr.length);
  }
    let splitArray = arr[randomNumber()];
    return splitArray = splitArray.split([, ]);
}
/*********************************************************
 * VARIABLE
 * Puts getRandomPhraseArray function into a variable
 *********************************************************/
const phraseArray = getRandomPhraseArray(phrasesArr); //array of letters gets captured by a variable
addPhraseToDisplay(phraseArray);
/*********************************************************
 * FUNCTION
 * receives phraseArray as a argument and creats a li tag for each letter and appends it to the DOM with the class letter.
 *********************************************************/
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i].toUpperCase();
        phraseDisplay.appendChild(li);
        if (li.textContent !== " ") {
            li.className = "letter";
        } else {
            li.className = "space";
        }
    }
}
/*********************************************************
 * FUNCTION
 * receives button as a argument and compares with li tag with class letterFound
 * if buttonClicked === li tag letter class, it will change li class to show
 *********************************************************/
function checkLetter(buttonClicked) {
      let letter;
    const elementsWithClass = document.getElementsByClassName("letter");
    for (let i = 0; i < elementsWithClass.length; i++) {

        if (elementsWithClass[i].textContent.toLowerCase() === buttonClicked.textContent.toLowerCase()) {
            elementsWithClass[i] = elementsWithClass[i].classList.add("show");
            letter = elementsWithClass[i];
       }
    }
    return letter;
}
/*********************************************************
* FUNCTION
* Targets button clicked in qwertyDiv
* Changes button color to diff class; button also disabled
 *********************************************************/
qwertyDiv.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        button.className = "chosen";
        button.disabled = "true";
        let letterFound = checkLetter(button);
/*********************************************************
* If button returned from function checkLetter is undefinded, below runs
* Remove hearts aka tries from scoreboard
*********************************************************/
    if (letterFound === undefined) {

            missed++;
            const img = document.querySelectorAll("img")[0];
            img.src = "images/lostHeart.png";

        }
        if (missed === 2) {
            const img = document.querySelectorAll("img")[1];
            img.src = "images/lostHeart.png";


        } else if (missed === 3) {
            const img = document.querySelectorAll("img")[2];
            img.src = "images/lostHeart.png";

        } else if (missed === 4) {
            const img = document.querySelectorAll("img")[3];
            img.src = "images/lostHeart.png";
        } else if (missed === 5) {
            const img = document.querySelectorAll("img")[4];
            img.src = "images/lostHeart.png";
        }
    }
/*********************************************************
* SCOBOARD CHECKER
* Compares length of both elements with diff classes, if they match win.
*********************************************************/
   if (lettersWithClassShow.length === lettersWithClassLetter.length) {
        startGame.style.display = "none";
        lose.textContent = "You Win!!!!";
        overlay.style.display = "block";
        overlay.classList.add("win");

    } else if  (missed === 5) {
        startGame.style.display = "none";
        lose.textContent = "Try again";
        overlay.style.display = "block";
        overlay.classList.add("lose");

    }
});
