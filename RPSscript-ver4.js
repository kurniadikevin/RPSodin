
let playerselection = 'playchoice';

//show result in html dom
let resultContent = document.querySelector('.resultMatch');
let scoreContent = document.querySelector('.score');
let gameRound = document.querySelector('.gameMove');

let playerPoint = document.querySelector('.playerScore');
let computerPoint = document.querySelector('.computerScore');

let playerOptions = document.querySelector('.options')
let resultDiv = document.querySelector('.result');

let matchWin =  'Player Win';
//bodyContent.appendChild(matchWin);

let matchLose =  'Computer Win';
//bodyContent.appendChild(matchLose);

let drawMatch =  'Tie Game';
//bodyContent.appendChild(drawMatch);

//let pScore = document.getElementsByClassName('playerScore');
//let cScore = document.getElementsByClassName('computerScore')
let playerScore = 0;
let computerScore = 0;
let moves = 0;



        function playGame(select){
        //Computer selection random 

        function getRandomNum(max){
            return Math.floor(Math.random()*max+1);
        }
        let randomNum = getRandomNum(3);
        let computerselection; 
            if(randomNum === 1){ computerselection = 'rock';}
            else if(randomNum === 2){ computerselection = 'paper';}
            else if(randomNum === 3){ computerselection = 'scissor';}

            let computerChoice = document.querySelector('.computerChoice');
            
           
                gameEnd();
            
        
        
            
            if(select === 'rock' && computerselection === 'paper'){
                
                computerScore++;
                computerPoint.textContent = computerScore;
                moves++;
                gameRound.textContent = moves;
                resultContent.textContent = matchLose;
                computerChoice.textContent = 'Computer Choice :' + computerselection;
            

        } else if(select === 'rock' && computerselection === 'scissor'){
               playerScore++;
                playerPoint.textContent = playerScore;
                moves++;
                gameRound.textContent = moves;
                resultContent.textContent = matchWin;
                computerChoice.textContent = 'Computer Choice :' + computerselection;

        } else if(select === 'paper' && computerselection === 'scissor'){
                computerScore++;
                computerPoint.textContent = computerScore;
                moves++;
                gameRound.textContent = moves;
                resultContent.textContent = matchLose;
                computerChoice.textContent = 'Computer Choice :' + computerselection;

        } else if( select === 'paper' && computerselection === 'rock' ){
                
                playerScore++;
                playerPoint.textContent = playerScore;
                moves++;
                gameRound.textContent = moves;
                resultContent.textContent = matchWin;
                computerChoice.textContent = 'Computer Choice :' + computerselection;

        } else if( select === 'scissor' && computerselection === 'rock'){
                computerScore++;
                computerPoint.textContent = computerScore;
                moves++;
                gameRound.textContent = moves;
                resultContent.textContent = matchLose;
                computerChoice.textContent = 'Computer Choice :' + computerselection;

        } else if (select === 'scissor' && computerselection === 'paper'){
                playerScore++;
                playerPoint.textContent = playerScore;
                moves++;
                gameRound.textContent = moves;
                resultContent.textContent = matchWin;
                computerChoice.textContent = 'Computer Choice :' + computerselection;

        } else if (select === computerselection){ 
                moves++;
                gameRound.textContent = moves;
                resultContent.textContent = drawMatch;
                computerChoice.textContent = 'Computer Choice :' + computerselection;
            
        } 

            
                



                

                

        };

        // player selection declaration
        let playerChoiceRock = document.createElement('div')
            playerChoiceRock.textContent = 'Player Choice : rock'
        let playerChoicePaper = document.createElement('div')
            playerChoicePaper.textContent = 'Player Choice : paper'
        let playerChoiceScissor = document.createElement('div')
            playerChoiceScissor.textContent = 'Player Choice : scissor'

        //player selection Dom    
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');

        rockBtn.addEventListener('click',() => {
            console.log(playGame('rock'));
            resultContent.appendChild(playerChoiceRock); 
            })

        paperBtn.addEventListener('click',() => {
            playGame('paper');
            resultContent.appendChild(playerChoicePaper); 
            
        })
        
        scissorBtn.addEventListener('click',() => {
            playGame('scissor');
            resultContent.appendChild(playerChoiceScissor); 
            
        })

        let gameResult = document.querySelector('.gameEnd');

    function gameEnd(){
        if(playerScore  == 5){
            gameResult.textContent = 'You win this Game!!'
            playerOptions.style.display = 'none';
        } else if ( computerScore == 5 ){
            gameResult.textContent = 'You Lose Computer Win!!'
            playerOptions.style.display = 'none';
        } 
        
        //resultDiv.style.display = 'none';
		}
        
    
   
        

/* to do list : 
-make match score
- make result appear for one match only
- do css styling
*/





