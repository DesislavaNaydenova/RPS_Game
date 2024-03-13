let userScore = 0;
let compScore = 0;
let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("comp-score");
let scoreFieldDiv = document.querySelector("score-field");
let resultDiv = document.getElementsByClassName("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

/**Generates a random choice ("r", "p", or "s") for the computer.
 */
function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
/**
 * Increments the user's score and updates the score display.
 */
function win(user, computer){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
}
/**
 * Increments the computer's score and updates the score display.
 */
function lose(){
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
}
/**
 * Updates the score display in case of a draw.
 */
function draw(){
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    
}
/**
 * Takes the user's choice ,
 *  generates the computer's choice,
 *  and determines the result of the game.
 */
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "sp":
        case "pr":
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "rs":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }

}
/**
 * Listens to the user's choice when a choice is clicked
 * and calls the "game" function.
 */
function main(){
rockDiv.addEventListener("click", function(){
    game("r"); 
});
paperDiv.addEventListener("click", function(){
    game("p"); 
});
scissorsDiv.addEventListener("click", function(){
    game("s"); 
});
}
main();