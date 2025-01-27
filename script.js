// Winning: Rock beats scissors, scissors beats paper, and paper beats rock 
// Draws: If both players make the same hand shape, the round is a draw 
let user_score =  document.querySelector('#user-score');
let comp_score = document.querySelector('#comp-score');
let message = document.querySelector('#user-msg');
let  msg = document.querySelector('#msg');


let result1 = document.querySelector('#result1');
let result2 = document.querySelector('#result2');



let userScore = 0 ;
let compScore = 0;
let choices = document.querySelectorAll('.choice')

let computerSelect;
const genComputerChoice =  function (){
        const options = ["rock" , "paper" , "scissor"];
         let randomNum = parseInt(Math.random()*3  );
         return options[randomNum];
         
}
const drawGame = function(){
           console.log('Game was drawn');
           message.innerHTML = 'Game was drawn';
           message.style.display = "block";
           msg.innerHTML = "Game Drawn !";
           msg.style.backgroundColor = "#222c46";

}
const showWinner = function(userWin){
    if(userWin){
        userScore++;
        user_score.innerHTML = userScore;
        console.log( "You : ",userScore);
        msg.innerHTML = "You Win !";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++ ;
        comp_score.innerHTML = compScore;
        console.log("Computer : ",compScore);
        msg.innerHTML = "You Lose !";
        msg.style.backgroundColor = "red";
    }
}
const playGame = function(userChoice){
             console.log('User Choice : ', userChoice);
             const compChoice = genComputerChoice();
             console.log('Comp Choice : ', compChoice);
             result1.innerHTML = userChoice ;
             result2.innerHTML = compChoice;
             if(userChoice == compChoice){
                drawGame();
             }
            else{
                message.style.display = "none";

                 let userWin = true;
                 if(userChoice === 'rock'){
                    //scissor , paper
                    userWin = compChoice === 'scissor' ? true : false ;
                 } 
                 else if(userChoice === 'paper'){
                    //rock , scissor
                    userWin = compChoice === 'rock' ? true : false ;
                 }
                 else{
                    //rock , paper
                    userWin = compChoice === 'paper'? true : false ;
                 }
                 showWinner(userWin);
            }
            
}
choices.forEach( (choice) => {
    choice.addEventListener( "click" , (e) => {
      
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    
     })
}) ;



