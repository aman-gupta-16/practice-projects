let boxes=document.querySelectorAll(".box");
let game=document.querySelector(".game");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector(".new-btn");
let resetBtn=document.querySelector(".resetBtn");


let turnO=true;
const winPatterns=[ //2d array
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
game.classList.remove("hide-game");
resetBtn.classList.remove("hide-game");
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){ //player O
            box.innerText="O";
            turnO=false;
            count++;
        }
        else{  //player x
            box.innerText="X";
            turnO=true;
            count++;
        }
        if(count===9){
            drawGame();
        }
       box.disabled=true;
       checkWinner();
       console.log(count);
    });
    
});
const drawGame=()=>{
    msg.innerText=`Match is Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count=0;
}
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    game.classList.remove("hide-game");
    resetBtn.classList.remove("hide-game");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        game.classList.add("hide-game");
        resetBtn.classList.add("hide-game");
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
    }
   }
 }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


