  
//create score variables
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
    } 
        //tie conditional
    else if (playerSelection === computerSelection) {
        console.log("Draw, try again!");
        return playerSelection, computerSelection;
    } 
    //loosing conditional 
    else {
        console.log("You Lose!");
        computerScore++;
        return playerSelection, computerSelection;
    }

  }
   
function game() {
    //set scoreboard to 0
    computerScore = 0
    playerScore = 0
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        //create params for playRound (e.g. your choice + comps)
        const playerSelection = prompt('Choose Rock Paper or Scissors!'); //use prompt to enter choice
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection) //call playRound()
          
    }
    //Announce game results!
    if(playerScore > computerScore){
        alert('You win the game');
    }
    else if(playerScore < computerScore){
        alert('You lose the game');
    }
    else if(playerScore === computerScore){
        alert('Draw, Play Again!');
    }
}

game(); 
