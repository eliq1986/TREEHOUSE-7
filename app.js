const phraseDisplay = document.querySelector("ul");
const overlay = document.getElementById("overlay");
const endGameScreen = document.querySelector("h2");
const startUpScreen = document.querySelector("a");


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

startUpScreen.addEventListener("click", () => overlay.style.display = "none"); // removes startup screen

/*********************************************************
 * FUNCTION
 * Simple random number generator form 1 - 5
 *********************************************************/
const randomNumber = () =>  Math.floor(Math.random() * 5);

/*********************************************************
 * FUNCTION
 * Grabs random quote and splits it into an array of characters
 *********************************************************/
function getRandomPhraseArray(arr) {
    let randomArr = arr[randomNumber()];
    return splitArray = randomArr.split([,]);
}
/*********************************************************
 * VARIABLE
 * Puts getRandomPhraseArray function into a variable
 *********************************************************/
const splitRandomPhrase = getRandomPhraseArray(phrasesArr); //array of letters gets captured by a variable

/*********************************************************
 * FUNCTION
 * receives phraseArray as a argument and creats a li tag for each letter and appends it to the DOM with the class letter.
 *********************************************************/
function addPhraseToDisplay(arr) {
  arr.forEach(letter => {
       let li = document.createElement("li");
       li.textContent = letter.toUpperCase();
       phraseDisplay.appendChild(li);
     if (li.textContent !== " ") {
           li.className = "letter";
       } else {
           li.className = "space";
       }
  });
}
/*********************************************************
 * FUNCTION
 * receives button as a argument and compares with li tag with class letterFound
 * if buttonClicked === li tag letter class, it will change li class to show
 *********************************************************/
function checkLetter(buttonClicked) { //Removes
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

document.getElementById("qwerty").addEventListener("click", (event) => {
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
            const hearts = document.querySelectorAll("img")[0];
            console.log(document.querySelectorAll("img")[0].nextElementSibling);
            hearts.src = "images/lostHeart.png";

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

const lettersWithClassLetter = document.getElementsByClassName("letter").length;
const lettersWithClassShow = document.getElementsByClassName("show").length;

   if (lettersWithClassShow === lettersWithClassLetter) {
       startUpScreen.style.display = "none";
        endGameScreen.textContent = "You Win!!!!";
        overlay.style.display = "block";
        overlay.classList.add("win");

    } else if (missed >= 5) {
        startUpScreen.style.display = "none";
        endGameScreen.textContent = "Try again";
        overlay.style.display = "block";
        overlay.classList.add("lose");

    }
});

addPhraseToDisplay(splitRandomPhrase);
