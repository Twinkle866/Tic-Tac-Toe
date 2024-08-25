let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGamebtn= document.querySelector(".new-btn");
let winmsg=document.querySelector(".msg");

let turnO = true; //player O

let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8],
 [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];


boxes.forEach((box)=>{
       box.addEventListener("click", ()=>{
              console.log("button was clicked");
              if(turnO){
                     box.innerText="O";
                     turnO=false;
              }
              else{
                     box.innerText="X";  
                     turnO=true;
              }
              box.disabled=true;
              checkWinner();
       })  
})

const checkWinner =() =>{
for(let pattern of winPatterns){
      // console.log(pattern[0],pattern[1],pattern[2]); 
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
  
      // console.log(boxes[pattern[0]] ,boxes[pattern[1]],boxes[pattern[2]]);     
      if(pos1!="" && pos2 !="" && pos3 !=""){
       if(pos1=== pos2 && pos2 === pos3){
             // console.log(`Winner : ${pos1}`);
              showWinner(pos1);
       }
    }
  }
}

const showWinner =(Winner)=>{
 winmsg.innerText=` Player ${Winner} is the Winner !!`;
 winmsg.classList.remove("hide");
newGamebtn.classList.remove("hide");
disablebtn();
}

const disablebtn =()=>{
       for(box of boxes){
              box.disabled=true;
       }
}

const resetGame =()=>{
       turnO = true;
       enablebtn();
       winmsg.classList.add("hide");
       newGamebtn.classList.add("hide");
}

const enablebtn=()=>{
       for(box of boxes){
       box.disabled=false;
       box.innerText="";
}
}

newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);