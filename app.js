const qwertyDiv = document.getElementById("qwerty");
const startGame = document.querySelector("a");
const phraseDisplay = document.querySelector("ul");
const overlay = document.getElementById("overlay");

const phrasesArr = ["Do or do not",
    "May the force be with you",
    "Much to learn you still have",
    "Join the dark side we have cookies",
    "Use the force"
];
let missed = 0;

startGame.addEventListener("click", () => { // removes startup screen
    overlay.style.display = "none";
});
/********************FUNCTION******************************/
function randomNumber() { //Generates random number
    return Math.floor(Math.random() * 5);
}
/********************FUNCTION******************************/
function getRandomPhraseArray(arr) { //gets random phrase and turns it into an array of letters
    let splitArray = arr[randomNumber()];
    return splitArray = splitArray.split([, ]);
}
/********************FUNCTION******************************/
const phraseArray = getRandomPhraseArray(phrasesArr); //array of letters gets captured by a variable

/********************FUNCTION******************************/
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        phraseDisplay.appendChild(li);
        if (li.textContent !== " ") {
            li.className = "letter";
        } else {
            li.className = "space";
        }
    }
}
/********************FUNCTION******************************/
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
/********************FUNCTION******************************/
qwertyDiv.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        button.className = "chosen";
        button.disabled = "true";
        let letterFound = checkLetter(button);
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

    const lettersWithClassLetter = document.getElementsByClassName("letter").length;
    const lettersWithClassShow = document.getElementsByClassName("show").length;

    if (lettersWithClassShow === lettersWithClassLetter) {
        const h2 = document.querySelector("h2");
        const a = document.querySelector("a");
        a.style.display = "none";
        h2.textContent = "You Win!!!!";
        overlay.style.display = "block";
        overlay.classList.add("win");
    } else if (missed >= 5) {
        const lose = document.querySelector("h2");
        const a = document.querySelector("a");
        a.style.display = "none";
        lose.textContent = "Try again";
        overlay.style.display = "block";
        overlay.classList.add("lose");

    }
});

addPhraseToDisplay(phraseArray);
