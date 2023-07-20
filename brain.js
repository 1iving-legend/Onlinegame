const cells=document.querySelectorAll(".cell");
const statustext=document.querySelector("#statustext");
const restartbtn=document.querySelector("#restart");
const wincondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let option=["","","","","","","","",""];
let currentplayer="X";
let running=false;

initilizegame();

function initilizegame(){
    cells.forEach(cell=>cell.addEventListener("click", cellclicked));
    restartbtn.addEventListener("click", restartgame);
    statustext.textContent=`${currentplayer}'s turn`;
    running=true;

}

function cellclicked(){
const cellIndex= this.getAttribute("cellIndex");


if(option[cellIndex]!="" || !running)
{return;}

updatecell(this, cellIndex);
checkwinner();
}

function updatecell(cell, index){
 option[index]=currentplayer;
 cell.textContent=currentplayer;


}

function checkwinner(){

    let winner=false;

    for(let i=0; i < wincondition.length;i++)
    {
        const condition=wincondition[i];
        const a=option[condition[0]];
        const b=option[condition[1]];

        const c=option[condition[2]];

        if(a=="" || b=="" || c=="")
        {
            continue;
        }
        if(a==b && b==c){
            winner=true;
            break;
        }

    }
    if(winner){
        statustext.textContent=`${currentplayer}'s wins`;
        running=false;
    }else if(!option.includes("")){
        statustext.textContent="draw!";
        running=false;
    }
    else{
        changeplayer();
    }

}

function changeplayer(){

    currentplayer=(currentplayer=="X")? "O": "X";
    statustext.textContent=`${currentplayer}'s turn`;
}

function restartgame(){
currentplayer="X";
option=["","","","","","","","",""];
statustext.textContent=`${currentplayer}'s turn`;
running=true;
cells.forEach(cell=>cell.textContent="");

}
