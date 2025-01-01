
var enteredWord = "";

var solution = "WORDI";

console.log(solution[0]);
console.log(solution[1]);
console.log(solution[2]);
console.log(solution[3]);
console.log(solution[4]);

var rowValue = 0;

var rows = document.querySelectorAll('.row');

var numberCorrect = 0;

var gameWon = false;

console.log(rows)

function keyPress(letter) {
    letter = letter.toUpperCase();
    if (letter === "ENTER") {
        if (!gameWon) {
            clickEnter();
        }
    } else if (letter === "BACKSPACE") {
        // console.log("BACKSPACE")
        if (!gameWon) {
            deleteLetter();
        }
    } else if (letter >= 'A' && letter <= 'Z') {
        // console.log("LETTER")
        if (!gameWon) {
            addLetter(letter);
        }
    }
}

function addLetter(letter) {
    if (enteredWord.length < 5) {

        enteredWord += letter;
        console.log(enteredWord);

        currentRow = rows[rowValue];

        currentBoxes = currentRow.querySelectorAll('.box');

        for (let i = 0; i < 5; i++) {
            box = currentBoxes[i];
            // box.innerHTML = letter;

            // Iterate through each box, if the word to put in is longer then the current box
            // i.e it should be occupied, fill it with the corresponding letter
            if (enteredWord.length - 1 >= i) {
                box.innerHTML = enteredWord[i];
            }
        }
    }
}

function deleteLetter() {
    enteredWord = enteredWord.slice(0, -1);
    console.log(enteredWord)

    currentRow = rows[rowValue];

    currentBoxes = currentRow.querySelectorAll('.box');

    for (let i = 0; i < 5; i++) {
        box = currentBoxes[i];
        // box.innerHTML = letter;

        // Iterate through each box, if the word to put in is longer then the current box
        // i.e it should be occupied, fill it with the corresponding letter
        if (enteredWord.length - 1 < i) {
            box.innerHTML = "";
        }
    }
}

function checkAnswer() {
    for (let i = 0; i < 5; i++) {
        box = currentBoxes[i];
        for (let j = 0; j < 5; j++) {
            // If letter is in solution
            if (enteredWord[i] === solution[j]) {

                // if letter is in right position
                if (i === j) {
                    numberCorrect += 1;
                    box.style.backgroundColor = "#c76020";
                    box.style.border = "none";
                } else {
                    box.style.backgroundColor = "#38d93e";
                    box.style.border = "none";
                }
            }
        }
    }
}

function clickEnter() {
    if (enteredWord.length === 5) {
        checkAnswer();
        if (numberCorrect === 5){
            alert("You Win");
            gameWon = true;
        }
        rowValue += 1;
        enteredWord = "";
        numberCorrect = 0;
    } else {
        alert("Must be 5 characters before moving on");
    }

}

function reset() {
    for (let i = 0; i < 6; i++) {
        currentRow = rows[i];
        currentBoxes = currentRow.querySelectorAll('.box');
        for (let j = 0; j < 5; j++) {
            currentBoxes[j].innerHTML = "";
            // currentBoxes[j].style.backgroundColor = 
        }
    }
}

document.addEventListener('keydown', (event) => {keyPress(event.key)});

