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

let counter = 0;
let word = "";
document.addEventListener('keydown', function(event) {
    squareList[counter].textContent = event.key;
    counter++;
    if (counter % 5 === 0 && counter !== 0) {
        squareList.slice(counter - 5, counter + 1).forEach(function(square) {
            word+= square.textContent;
            if (word.length === 5) {
                console.log(word);
                word = "";
            }
        });
    }
})

