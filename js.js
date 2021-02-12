playerpoints = 0;
computerpoints = 0;


function newRound(playerSelection){
    
const options = ['rock', 'paper', 'scissors']         //options to choose from

function ComputerChoice(){                           //function to get a random choice from the computer
       
const optionsPick = Math.floor(Math.random() *       //way to get a random index from the options array
 options.length); 
return options[optionsPick];                         // returning the content of that index in the array
}
let computerSelection = ComputerChoice();


function playRound(){
    if(playerSelection === computerSelection){
        itsatie();
    } else if (playerSelection === 'rock' && computerSelection == 'paper'){
        youLose(), 
        computerpoints += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        youWon(),
        playerpoints +=1;
    }else if (playerSelection === 'paper' && computerSelection == 'scissors'){
        youLose(),
        computerpoints += 1;
    }else if (playerSelection === 'paper' && computerSelection == 'rock'){
        youWon(),
        playerpoints +=1;
    }else if (playerSelection === 'scissors' && computerSelection == 'rock'){
       youLose(),
        computerpoints += 1;
    } else if (playerSelection === 'scissors' && computerSelection == 'paper'){
        youWon(),
        playerpoints +=1;
        
        
    }}
      playRound();
    

      scorePlayer.textContent = playerpoints;
      scoreComputer.textContent = computerpoints;

      if(playerpoints == 5){wonGame(),
      computerpoints = 0;
      playerpoints = 0;
    }else if(computerpoints == 5){lostGme(),
    computerpoints = 0;
    playerpoints =0;}


    
}




const body = document.querySelector('body');
body.classList.add('fondo')

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function chooseRock(){

    const audio = document.querySelectorAll('audio');
    audio[0].currentTime=0;
    audio[0].play();

    newRound('rock');
}
function choosePaper(){

    const audio =  document.querySelectorAll('audio')

    audio[1].currentTime=0;
    audio[1].play();

    newRound('paper');
}

function chooseScissors(){

  const audio = document.querySelectorAll('audio');
  audio[2].currentTime=0;

  audio[2].play();
    newRound('scissors');

}

rock.addEventListener('click', chooseRock, rockmove);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);


//paper.addEventListener('click', papermove());
//scissors.addEventListener('click', scissorsmove());

const divs = document.getElementsByClassName("divbar");

for(i = 0; i < divs.length; i++){      //adding buttondivs class to button's divs

    divs[i].classList.add('buttondivs');
}

scorePlayer = document.getElementById("playerpoints");
scoreComputer = document.getElementById("computerpoints");



function itsatie(){

    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='It\'s a tie....arghhh the nerves';
    
}
function youWon(){

    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='You won this one, alright !';
}
function youLose(){

    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='You lost this one mate...';
}

function wonGame(){
    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='YOU WON !!!'
}
function lostGme(){

    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='OHHHH NO... YOU LOST.';
}

function rockmove(){

    rock.style.animation["@keyframes"]= "movimiento";

}