  
    
//Game Set Up   
    //create score variables
var playerScore = 0
var computerScore = 0
var announcement ='';

  //create functions 
function getComputerChoice() { 
    // create a list holding game choices 
   const choice_list = ['paper', 'scissors', 'rock']
   //create a random # between 1-3 and assign as index
   const rand_num_ind =  Math.floor(Math.random() * 3);
   //return list with randomly created index
   return choice_list[rand_num_ind]
    }

function playRound(playerSelection, computerSelection) {
    // turn playerSelection into all lowercase to compare with computerSelection
    const playerSelectionLow = playerSelection.toLowerCase();

    //start game: one round
        //winning conditionals
    if (playerSelectionLow == "rock" && computerSelection == "scissors" || playerSelectionLow == "paper" && computerSelection == "rock" 
    || playerSelectionLow =="scissors" && computerSelection == "paper") {
        alert("Round Win!");
        playerScore++;
    } 
        //tie conditional
    else if (playerSelectionLow === computerSelection) {
        alert("Round Draw!");
    } 
    //loosing conditional 
    else {
        alert("Round Lose!");
        computerScore++;
    }

  }

function reset() {
    playerScore = 0
    computerScore = 0
        
    //scoreboard code 
    const playerScorePara = document.getElementById('playerScore')
    const computerScorePara = document.getElementById('computerScore')
         
    playerScorePara.textContent = `${playerScore}`
    computerScorePara.textContent = `${computerScore}`
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); //call playRound()

    //scoreboard code 
    const playerScorePara = document.getElementById('playerScore')
    const computerScorePara = document.getElementById('computerScore')
     
    playerScorePara.textContent = `${playerScore}`
    computerScorePara.textContent = `${computerScore}`
    
                //Announce game results!
    if(playerScore == 3 && playerScore > computerScore){
        announcement = 'You win :)';
        alert(announcement);
    }
    else if(computerScore ==3 && playerScore < computerScore){
        announcement = 'You lose :(';
        alert(announcement);
    }
    else if(playerScore == 3 && playerScore === computerScore){
        announcement = 'Draw :|\n Play Again!';
        alert(announcement);  
    } 

    return playerScore, computerScore
}

function playRock() {
    const playerSelection = 'rock'; // enter choice
    playGame(playerSelection); 
}

function playPaper() {
    const playerSelection = 'paper';
    playGame(playerSelection); 
}

function playScissors() {
    const playerSelection = 'scissors'; 
    playGame(playerSelection); 
  
}



//Functionality Elements 

 //button functinlaity
 document.getElementById("paper").addEventListener("click", playPaper);
 document.getElementById("rock").addEventListener("click", playRock);
 document.getElementById("scissors").addEventListener("click", playScissors);
 document.getElementById("reset").addEventListener("click", reset);


