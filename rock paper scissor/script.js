let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msgContainer=document.querySelector(".msg-container");
const msg=document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

//generate computer choice
const compGenerator=()=>{
    let options = ["stone", "paper" ,"scissor"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

//draw
const draw=()=>{
    console.log("match is draw");
        msgContainer.style.backgroundColor = "grey";
        msg.innerText="match is draw";
}


//match winner
const matchWinner=(userChoice,compChoice)=>{
    let userWin;
    
    if(userChoice===compChoice){
        draw();  
    }
    else if(userChoice==="stone"){
        if(compChoice==="paper"){
            console.log("computer beat you");
            userWin=false;
           
        }
        else{
            console.log("you win");
            userWin=true;
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="scissor"){
            console.log("computer beat you");
            userWin=false;
        }
        else{
            console.log("you win");
            userWin=true;
        }
    }
    else if(userChoice==="scissor"){
        if(compChoice==="stone"){
            console.log("computer beat you");
            userWin=false;
        }
        else{
            console.log("you win");
            userWin=true;
        }
    }
    msgDisplay(userWin,userChoice,compChoice);
}


//play game
const playGame=(userChoice)=>{
    console.log("user choice ",userChoice);
    const compChoice=compGenerator();
    console.log("computer choice",compChoice);
    matchWinner(userChoice,compChoice);
}



//user choice
choices.forEach(choice=>{
      choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        playGame(userChoice);
      })
});

//mssg-container
const msgDisplay=(userWin,userChoice,compChoice)=>{
   if(userWin===false){
    msgContainer.style.backgroundColor="red";
    msg.innerText=`computer ${compChoice} beats your ${userChoice}`;
    compScore++;
    compScorePara.innerText=compScore;
    
    }
    else if(userWin===true) {
    msgContainer.style.backgroundColor="green";
    msg.innerText=`your  ${userChoice} beat computer ${compChoice}`;
    userScore++;
    userScorePara.innerText=userScore;
    }
}