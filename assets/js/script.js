const userScore = 0;
const compScore = 0;
const userScoreSpan = document.getElementById("user-label");
const compScoreSpan = document.getElementById("comp-label");
const scoreFieldDiv = document.querySelector("score-field");
const resultDiv = document.getElementsByClassName("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

/**Makes the computer choose between one of the
 * 3 given parameters
 */
function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
const computerChoice = getComputerChoice();
console.log(computerChoice);

function game(userChoice){
    console.log(":poop" + userChoice);
}
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