let boxes = document.querySelectorAll(".box")
let restartBtn = document.querySelector('#reset')
let msg = document.getElementById("msg")
let container = document.querySelector(".container1");
let newGame = document.getElementById("new-btn")
let prevBtn = document.getElementById("prev-btn")


let turnO = true;

let pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]



for (i = 0; i < boxes.length; i++) {
    boxes[i].onclick = game;
}


function game() {
    if (turnO) {
        this.innerText = "O"
        this.style.color = "#f6f20b"
        turnO = false
    }
    else {
        this.innerText = "X"
        this.style.color = '#6fffe9'
        turnO = true
    }
    this.disabled = true;
    winner()
}



 function winner(){
let allBoxesFilled = true;

   for (i = 0; i < pattern.length; i++) {  
    let pos1val = boxes[pattern[i][0]].innerText;
    let pos2val = boxes[pattern[i][1]].innerText;
    let pos3val = boxes[pattern[i][2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner", pos1val);
        showWinner(pos1val)
        return;
    }
    
    }
          
}

for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerText === "") {
        allBoxesFilled = false; 
        break;
    }
}


if (allBoxesFilled) {
    showTie();
}

}
function showTie() {
    msg.innerText = `Game is a draw! Try again for a win`; 
    container.classList.remove("hide"); 
    disableBoxes(); 
}



function showWinner(winner){
    msg.innerText = `Congratulations, Winner is ${winner}`
    container.classList.remove("hide");
    disableBoxes();
}

function disableBoxes(){
    for(i=0; i<boxes.length; i++){
        boxes[i].disabled = true;
    }
}

function restart(){
    turnO = true;
    enableBoxes();
    container.classList.add("hide")
}

function enableBoxes(){
    for(i=0; i<boxes.length; i++){
        boxes[i].disabled = false;
        boxes[i].innerText = ""
    }
}


restartBtn.onclick = restart;
newGame.onclick = restart;

