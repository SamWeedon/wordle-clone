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

const squareList = document.querySelectorAll('.square');

let counter = 0;
document.addEventListener('keydown', function(event) {
    squareList[counter].textContent = event.key;
    counter++;
})