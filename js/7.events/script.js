
let boxx=document.querySelector("#boxx");
let boxxx=document.querySelector("#boxxx");
let boxe=document.querySelector("#boxe");
/*
boxx.event=()=>{

}
this Wrong coz

boxx.onclick=()=>{
    }
    this is right
*/

boxx.onclick=()=>{
    console.log("you clicked this");
}


boxxx.onmouseover=(e)=>{

    console.log("you are inside div");
      console.log(e);
    console.log(e.type);
    console.log(e.target);
     console.log(e.clientX, e.clientY);
  
}
boxx.onclick=(e)=>{
    console.log("you clicked this shit");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
     console.log(e.clientX, e.clientY);
  
   
}

boxe.addEventListener("click",(e)=>{

console.log("boxe button was clicked handler1");
  

})


boxe.addEventListener("click",(e)=>{

console.log("boxe button was clicked handler2");
  console.log(e);
    console.log(e.type);
    console.log(e.target);

})

const handlerr3=(e)=>{

console.log("boxe button was clicked handler3");
}
boxe.addEventListener("click",handlerr3)

boxe.addEventListener("click",(e)=>{

console.log("boxe button was clicked handler4");
  

})

/*
boxe.removeEventListener("click",(e)=>{

console.log("boxe button was clicked handler3");
  

})

this is wrong u never write the delete krne waala
eventListener ka code...
you store it in a varibale and then pass the variable
while adding the eventListener and also
while deleting so the compiler knows theyre the same
fns 
*/
boxe.removeEventListener("click",handlerr3)


//Practice Ques
console.log("Practice Ques");

/*instead of creating a button in html 
we do it in js only*/

let el=document.createElement("button");

let le=document.querySelector("#boxe");

le.after(el);
el.innerText="button";

let currmode="light";
el.addEventListener("click",()=>{

if(currmode==="light"){currmode="dark";document.body.style.backgroundColor="#121212";}
else{currmode="light";document.body.style.backgroundColor="#ffffff";}

})

/*hw ques....

when u see in a wesite when u hover one some designer 
button the shape of the button changes w some animation
here u didnt learn animation in css
but with mouseover on a button change the button shape.(bg image lagade designer kuch);
and alot of buttons in flexbox ,, this can be done in the 
amazon project each hero box item when u hover they should get bigger ... 
more ideally they get bigger with animation.. learn that too and mousover event se animation se sath big krdena ohk..*/

