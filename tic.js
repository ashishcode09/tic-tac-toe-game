let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let win=document.querySelector(".win");
let msg=document.querySelector("#winner");
let turnO=true;
let cnt=0;
let winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        cnt++;
        let isWinner = checkWinner();//functon to find win or not
        if (cnt === 9 && !isWinner) {
          gameDraw();
        }
    });
});
resetbtn.addEventListener("click", () => {
    cnt=0;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    win.classList.add("hide");
});
const disabledBox=()=>{{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}};
const showWinner=(winner)=>{
    msg.innerHTML=`Wohoo! <b>${winner} WINNER WINNER </b>`;
    win.classList.remove("hide");
    disabledBox();
};
const checkWinner=()=>{
    for(let patt of winPattern){
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
            return true;
            }
        }
    }
};
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    win.classList.remove("hide");
  };