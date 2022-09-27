  
let  computerScore = 0;
let  playerScore = 0;

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
    const low_player_txt = playerSelection.toLowerCase();

    //start game: one round
        //winning conditionals
    if (low_player_txt == "rock" && computerSelection == "scissors" || low_player_txt == "paper" && computerSelection == "rock" 
    || playerSelection =="scissors" && computerSelection == "paper") {
        console.log("You Win!");
        playerScore++;
        return playerSelection, computerSelection;
    } else if (playerSelection === computerSelection) {
        console.log("Draw, try again!");
        return playerSelection, computerSelection;
    } else {
        console.log("You Lose!");
        computerScore++;
        return playerSelection, computerSelection;
    }

  }
   
function game() {
for (let i = 0; i < 5; i++) {
    computerScore = 0
    playerScore = 0
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Rock Paper or Scissors!');
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
          
    }
    if(playerScore > computerScore){
        console.log('You win the game');
    }
    else if(playerScore < computerScore){
        console.log('You lose the game');
    }
    else if(playerScore === computerScore){
        console.log('Draw');
    }
}
}

game(); 
