const userScore = 0;
const compScore = 0;
const userScoreSpan = document.getElementById("user-label");
const compScoreSpan = document.getElementById("comp-label");
const scoreFieldDiv = document.querySelector("score-field");
const resultDiv = document.getElementsByClassName("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function game(userChoice){
    console.log(":poop ")
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