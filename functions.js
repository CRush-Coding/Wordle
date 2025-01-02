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
        // console.log(enteredWord);

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
    // console.log(enteredWord)

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
    currentRow = rows[rowValue];
    currentBoxes = currentRow.querySelectorAll('.box');
    for (let i = 0; i < 5; i++) {
        
        box = currentBoxes[i];
        box.style.backgroundColor = "rgb(59, 57, 57)";
        box.style.border = "none";
        for (let j = 0; j < 5; j++) {
            // If letter is in solution
            if (enteredWord[i] === solution[j]) {

                // if letter is in right position
                if (i === j) {
                    console.log("true")
                    numberCorrect += 1;
                    box.style.backgroundColor = "#c76020";
                    box.style.border = "none";
                } else {
                    console.log("semi-true")
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
        // console.log(i);  
        currentBoxes = currentRow.querySelectorAll('.box');
        for (let j = 0; j < 5; j++) {
            currentBoxes[j].innerHTML = "";
            currentBoxes[j].style.backgroundColor = "rgb(44, 44, 44)";
            currentBoxes[j].style.border = "2px solid lightgray";
            console.log(j);
            // currentBoxes[j].style.backgroundColor = 
        }
    }
    rowValue = 0;
    enteredWord = "";
    numberCorrect = 0;
    gameWon = false;
}

document.addEventListener('keydown', (event) => {keyPress(event.key)});

function showSettings() {
    if (document.querySelector('.settings-container').style.display === "none") {
        document.querySelector('.settings-container').style.display = "flex";
        console.log("flex");
        document.querySelector('.bi').style.backgroundColor = "rgb(73, 73, 73)";
    } else {
    document.querySelector('.settings-container').style.display = "none";
    document.querySelector('.bi').style.backgroundColor = "rgb(44, 44, 44)";
    console.log("none");
    }
    // console.log("hello");
}