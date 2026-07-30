let box=document.querySelectorAll(".diva");
let sign="O";
let box0=document.querySelector("#box0");
let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");
let box5=document.querySelector("#box5");
let box6=document.querySelector("#box6");
let box7=document.querySelector("#box7");
let box8=document.querySelector("#box8");
let winner=document.querySelector("#msg")
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector("#new-btn");
for(let el of box){
  
    el.addEventListener("click",()=>{
        if(el.innerText===""){/*very imp this line to not overwrite a O with X or a X with a O*/
        if(sign==="O" ){

            sign="X";
              el.innerText="O";
             
        }
        else if(sign==="F"){
            return;
        }
        else{
            sign="O";
            el.innerText="X";
            
        }
        
    }
    checkWinner();
});

}
    
let resetBtn=document.querySelector(".reset");
resetBtn.addEventListener("click",()=>{
    for(let ell of box){
        ell.innerText="";
    }
    sign="O";
     msgContainer.style.display="none";
});

/*winning speech*/


function checkWinner(){
if((box0.innerText==="O" && box1.innerText==="O" && box2.innerText==="O")
    ||(box3.innerText==="O" && box4.innerText==="O" && box5.innerText==="O")
    ||(box6.innerText==="O" && box7.innerText==="O" && box8.innerText==="O")
    ||(box0.innerText==="O" && box3.innerText==="O" && box6.innerText==="O")
    ||(box1.innerText==="O" && box4.innerText==="O" && box7.innerText==="O")
    ||(box2.innerText==="O" && box5.innerText==="O" && box8.innerText==="O")
    ||(box6.innerText==="O" && box4.innerText==="O" && box2.innerText==="O")
    ||(box0.innerText==="O" && box4.innerText==="O" && box8.innerText==="O")){

        
        winner.innerText=`Congratulations, O is the winner`;
        msgContainer.style.display="flex";
        sign="F";

}

if((box0.innerText==="X" && box1.innerText==="X" && box2.innerText==="X")
    ||(box3.innerText==="X" && box4.innerText==="X" && box5.innerText==="X")
    ||(box6.innerText==="X" && box7.innerText==="X" && box8.innerText==="X")
    ||(box0.innerText==="X" && box3.innerText==="X" && box6.innerText==="X")
    ||(box1.innerText==="X" && box4.innerText==="X" && box7.innerText==="X")
    ||(box2.innerText==="X" && box5.innerText==="X" && box8.innerText==="X")
    ||(box6.innerText==="X" && box4.innerText==="X" && box2.innerText==="X")
    ||(box0.innerText==="X" && box4.innerText==="X" && box8.innerText==="X")){


         winner.innerText=`Congratulations, X is the winner`;
         msgContainer.style.display="flex";
        sign="F";

}
}
newBtn.addEventListener("click",()=>{
msgContainer.style.display="none";
sign="O";
 for(let ell of box){
        ell.innerText="";
    }

})