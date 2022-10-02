//Game Set Up  
    //create score variables
var playerScore = 0
var computerScore = 0 

  //create functions 

   //randomize computer choice 
function getComputerChoice() { 
    // create a list holding game choices 
   const choice_list = ['paper', 'scissors', 'rock']
   //create a random # between 1-3 and assign as index
   const rand_num_ind =  Math.floor(Math.random() * 3);
   //return list with randomly created index
   return choice_list[rand_num_ind]
    }

    //update scores in html
function updateScores (playerScore, computerScore) {
    document.getElementById('playerScore').innerHTML = playerScore
    document.getElementById('computerScore').innerHTML = computerScore
    return [playerScore, computerScore]
    } 

    //reset game 
function resetGame() {

    playerScore = 0
    computerScore = 0
    
    //update scoreboard code 
    updateScores (playerScore, computerScore);
}

     //start game: single round
function playRound(playerSelection, computerSelection) {
    // turn playerSelection into all lowercase to compare with computerSelection
    const playerSelectionLow = playerSelection.toLowerCase();

        //winning conditionals
    if ((playerSelectionLow == "rock" && computerSelection == "scissors") || 
        (playerSelectionLow == "paper" && computerSelection == "rock") || 
        (playerSelectionLow =="scissors" && computerSelection == "paper")) {
            //alert("Round Win!");
        playerScore++;
        roundWinner = "Player Wins"
        document.getElementById('announcement').innerHTML = "Round: " + roundWinner
        }
        //tie conditional
    else if (playerSelectionLow === computerSelection) {
        roundWinner = "Draw"
        document.getElementById('announcement').innerHTML = "Round: " + roundWinner
    } 
    //loosing conditional 
    else {
            roundWinner = "CPU Wins"
            computerScore++;
            document.getElementById('announcement').innerHTML = "Round: " + roundWinner
         }

    updateScores (playerScore, computerScore);
    return [playerScore, computerScore]
  }

  //Game results
function gameEnd(playerSelection, playerScore, computerScore) {

    if((playerScore == 3) && (playerScore > computerScore)){
        gameResult = "You Win!";
        }
    else if((computerScore == 3) && (playerScore < computerScore)){
        gameResult = "You Lose :((";
        }
    
    return gameResult    
}
    //whole game
function playGame(playerSelection) {

    //computer choice
    const computerSelection = getComputerChoice();

    //play game!
    let [playerScore, computerScore] = playRound(playerSelection, computerSelection) 

    //game results
    let gameResult = gameEnd(playerSelection, playerScore, computerScore);

    return gameResult 
}
//modal functions 
    //open modal
function openModal(gameResult) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    const Btns = document.querySelectorAll(".myBtn");

    //add something to add announcement
    document.getElementById('modal-body').innerHTML = gameResult
    modal.style.display = "block";  
}
    //close modal 
function closeModal(){
    // Get the modal
    const modal = document.querySelector("#myModal")
    modal.style.display = "none";  
    }

  //UI
  const playerText = document.querySelector("#playerText");
  const computerText = document.querySelector("#computerText");
  const resultText = document.querySelector("#resultText");
  const choiceBtns = document.querySelectorAll(".myBtn");
  const resetBtn = document.querySelectorAll("#reset");
  let player;
  let computer;
  let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    let gameResult = playGame(playerSelection);
    openModal(gameResult);
}))


resetBtn.forEach(button => button.addEventListener("click", () => {
    resetGame();
    closeModal();
    location.reload();
}))


    


