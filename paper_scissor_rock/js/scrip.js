  
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();

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
        alert("You Win!");
        return playerSelection
    } else if (playerSelection === computerSelection) {
        alert("Draw, try again!");
        return playerSelection;
    } else {
        alert("You Lose!");
        return playerSelection
    }

  }
   
function game() {

for (let i = 0; i < 5; i++) {
   // your code here!
}


}
  console.log(playRound(playerSelection, computerSelection));