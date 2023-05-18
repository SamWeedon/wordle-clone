/*
WORDLE RULES:
5 letter words only
6 chances
green = correct location
yellow = in word but wrong location
keyboard below with status of letters
statistics after each win/loss
*/

function selectRandomWord(stringArray) {
    index = Math.floor(Math.random() * stringArray.length);
    return stringArray[index];
}

let wordList = ['truck', 'elect', 'coach', 'build', 'brain', 'cycle', 'craft', 'union', 'storm'];
let prototypeWord = selectRandomWord(wordList);
console.log(prototypeWord);

const squareList = Array.from(document.querySelectorAll('.square'));

let squareIndex = 0;
let charIndex = 0;
let word = "";
document.addEventListener('keydown', function addChar(event) {
    squareList[squareIndex].textContent = event.key;
    squareIndex++;
    if (squareIndex % 5 === 0 && squareIndex !== 0) {
        charIndex = 0;
        squareList.slice(squareIndex - 5, squareIndex).forEach(function(square) {
            word+= square.textContent;
            if (square.textContent === prototypeWord[charIndex]) {
                square.style.background = 'green';
            }
            else if (prototypeWord.includes(square.textContent)) {
                square.style.background = 'yellow';
            }
            charIndex++;
        });
        console.log(word);
        if (word.includes(prototypeWord)) {
            console.log("you win");
            document.removeEventListener('keydown', addChar);
        }
        word = "";
    }
})
