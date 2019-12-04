var numberOfSquares = 6;
//var colors = generateRandomColors(numberOfSquares);
var colors = [];
//var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h2 = document.querySelector("h2");
var newColorsButton = document.querySelector("#newColors");
//var easyButton = document.querySelector("#easyBtn");
//var hardButton = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    // Mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            //this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            if(this.textContent === "Easy") {
                numberOfSquares = 3;
            } else if(this.textContent === "Medium") {
                numberOfSquares = 6;
            } else {
                numberOfSquares = 9;
            }
            reset();
        });
    }
}

function setUpSquares() {
    // Square event listeners
    for(var i = 0; i < squares.length; i++) {
        // Add click listeners to alla squares
        squares[i].addEventListener("click", function() {
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "CORRECT!";
                newColorsButton.textContent = "PLAY AGAIN?";
                changeAllSquaresColor(clickedColor);
                h2.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "WRONG! TRY AGAIN.";
            }
        });    
    }
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    newColorsButton.textContent = "New Game";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h2.style.backgroundColor = "#232323";
}

newColorsButton.addEventListener("click", function() {
    reset();
});


function changeAllSquaresColor(color) {
    // Loop through all squares
    for(var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    // Make an array
    var array = []; 
    // Add number random colors to array
    for(var i = 0; i < number; i++) {
        // Get random color and push into array
        array.push(randomColor());
    }
    // Return that array
    return array;
}

function randomColor() {
    // Pick a "red" from 0 to 255
    var red = Math.floor(Math.random() * 256);
    // Pick a "green" from 0 to 255
    var green = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// ******************************** //
// COMMENTED CODE AFTER REFACTORING //
// ******************************** //

// Decide how many squares to show
// Pick new colors
// Pick a new pickedColor
// Update page to reflect changes

/*
for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy") {
            numberOfSquares = 3;
        } else {
            numberOfSquares = 6;
        }        
        reset();        
    });
}

easyButton.addEventListener("click", function() {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

newColorsButton.addEventListener("click", function() {
    // Generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // Pick a new random color from array of colors
    pickedColor = pickColor();
    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    // Change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h2.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to alla squares
    squares[i].addEventListener("click", function() {
        // Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECT";
            newColorsButton.textContent = "PLAY AGAIN?";
            changeAllSquaresColor(clickedColor);
            h2.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "TRY AGAIN";
        }
    });    
}*/