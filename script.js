const guessButton = document.getElementById("guessBtn");
const tryAgainButton = document.getElementById("tryAgainBtn");
const inputInput = document.getElementById("numberInput");
const info = document.getElementById("infoParagraph");
const final = document.getElementById("finalText");
const min = 1;
const max = 100;
let answer = Math.floor(Math.random(max - min) * 100 + 1);
let gameOver = false;
let attempts = 0;
guessButton.addEventListener("click", () => {
        if(gameOver){
        return;
        }
        else if(inputInput.value > 100 || inputInput.value < 1){
        finalText.textContent = "Please enter a number between 1-100!";
        }
        else if(inputInput.value > answer){
            attempts++;
            finalText.textContent = "Too high, try again!";
            if(finalText.textContent === `Congratulations! you won! it took you ${attempts} attempts.`){
                
            }
        }
        else if(inputInput.value < answer){
            attempts++;
            finalText.textContent = "Too low, try again!";
            if(finalText.textContent === `Congratulations! you won! it took you ${attempts} attempts.`){
            }
        }
        else{
            attempts++
            finalText.textContent = `Congratulations! you won! it took you ${attempts} attempts.`;
            gameOver = true;
        }
});
tryAgainButton.addEventListener("click", () => {
    gameOver = false;
    answer = Math.floor(Math.random(max - min) * 100 + 1);
    attempts = 0;
    info.textContent = "You started a new game!";
    setTimeout(() => {
    info.textContent = "";
    finalText.textContent = "";
    },3500);
});


