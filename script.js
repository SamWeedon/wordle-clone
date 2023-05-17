/*
WORDLE RULES:
5 letter words only
5 chances
green = correct location
yellow = in word but wrong location
keyboard below with status of letters
statistics after each win/loss
*/
let wordList = ['truck', 'elect'];
let prototypeWord = 'truck';

const squareList = Array.from(document.querySelectorAll('.square'));

let squareCounter = 0;
let charCounter = 0;
let word = "";
document.addEventListener('keydown', function(event) {
    squareList[squareCounter].textContent = event.key;
    squareCounter++;
    if (squareCounter % 5 === 0 && squareCounter !== 0) {
        charCounter = 0;
        squareList.slice(squareCounter - 5, squareCounter).forEach(function(square) {
            word+= square.textContent;
            if (square.textContent === prototypeWord[charCounter]) {
                square.style.background = 'green';
            }
            else if (prototypeWord.includes(square.textContent)) {
                square.style.background = 'yellow';
            }
            charCounter++;
        });
        console.log(word);
        if (word.includes(prototypeWord)) {
            console.log("you win")
        }
        for (let i = 0; i < 5; i++) {
            if (word[i] === prototypeWord[i]) {

            }
        }
        word = "";
    }
})

