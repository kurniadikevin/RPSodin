let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {

let playerselection = (prompt('Rock,Paper,Scissor?')).toLowerCase();// *PLAYER INPUT 

 //getting random num 1-3
 function getRandomNum(max){
    return Math.floor(Math.random()*max+1);// how to return number 1-3 not 0 included????
  }

  let randomNum = getRandomNum(3);
//return random number to rock papper scissor and return to computerselection
let computerselection; 
    if(randomNum === 1){ computerselection = 'rock';}
      else if(randomNum === 2){ computerselection = 'paper';}
      else if(randomNum === 3){ computerselection = 'scissor';}
  
// test console log
//console.log(randomNum + ' test random number computer');// test random number for computer selection
console.log('Player selection: ' + playerselection);
console.log('Computer selection: ' + computerselection);


// data for console.log and match result
let playerwin = `You win! ${playerselection} beats ${computerselection}`;
let computerwin = `You Lose! ${computerselection} beats ${playerselection}`;

function result(){
if(playerselection === 'rock' && computerselection === 'paper'){
    return computerwin;
} else if(playerselection === 'rock' && computerselection === 'scissor'){
    return playerwin;
} else if(playerselection === 'paper' && computerselection === 'scissor'){
    return computerwin;
} else if( playerselection === 'paper' && computerselection === 'rock' ){
    return playerwin;
} else if( playerselection === 'scissor' && computerselection === 'rock'){
    return computerwin;
} else if (playerselection === 'scissor' && computerselection === 'paper'){
    return computerwin;
} else if (playerselection === computerselection){ return 'Draw';
}} 

console.log(result());// result of match



function game(){
    
    if(result() === playerwin){
    playerScore ++ ;
  } else if(result()=== computerwin){
    computerScore ++ ;
}}
//console.log(game());
game();
}

console.log('Player Score: ' + playerScore);
console.log('Computer Score: ' + computerScore);

 if(playerScore > computerScore){
     console.log('Player win game match')
 } else if(playerScore === computerScore){
     console.log('Game Draw')
 } else if(playerScore < computerScore){
     console.log('Player Lose game')
 }

 


    






