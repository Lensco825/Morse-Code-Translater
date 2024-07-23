var morseText = document.getElementById('morseTextArea');
var translateButton = document.querySelector('.translateBtn');
var input = morseText.value.toString("");
var output = document.getElementById('textArea');

var morseRef = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C", 
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "/": " "
};


function checkIfValid() {
    input =  morseText.value.toString("");
    if (input.match(/[a-zA-Z0-9_]/g) === null) {
        morseToText();
        return console.log(input.split(" "));
       }
       else {
        morseText.value = "";
       }

    }

function morseToText() {
let str = input.split(" ").map(code => morseRef[code]).join("");
output.value = str;

return console.log(str);
}

translateButton.addEventListener('click', checkIfValid); 
