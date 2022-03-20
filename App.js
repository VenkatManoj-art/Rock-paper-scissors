// Fetching id's from HTML file and storing into another variable.
const computerChoiceDisplay=document.getElementById('com-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');
let computerChoice;
let result;
// To grab all the buttons elements
const possibleChoices=document.querySelectorAll('button');
//When user clicks the buttons it grabs the id of user-choice and display.
possibleChoices.forEach(possibleCho => possibleCho,addEventListener('click',(r) =>{
  userChoice=r.target.id;
  userChoiceDisplay.innerHTML=userChoice;
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice(){
    const randomNum=Math.floor(Math.random() * 3) +1;

if(randomNum == 1){
    computerChoice='rock';
}else if(randomNum == 2){
    computerChoice='scissors';
}else{
    computerChoice='paper';
}
computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
    if(computerChoice == userChoice){
        result="It's a draw match";
    }
    if(computerChoice === 'rock' && userChoice==='paper'){
        result="You win";
    }
    if(computerChoice ==='rock' && userChoice ==='scissors'){
        result="Computer win!";
    }
    if(computerChoice === 'paper' && userChoice =='scissors'){
        result="You win";
    }
    if(computerChoice ==='paper'&& userChoice =='rock'){
        result="You Lost";
    }
    if(computerChoice ==='scissors'&& userChoice =='rock'){
        result="You win";
    }
    if(computerChoice ==='scissors'&& userChoice =='paper'){
        result="You Lose ! Better luck next time";
    }
    resultDisplay.innerHTML=result;
}
