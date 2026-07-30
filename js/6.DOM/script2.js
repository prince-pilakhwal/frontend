let but=document.createElement("button");
but.innerText="click me";
but.style.backgroundColor="red";
but.style.color="white";

document.body.prepend(but);


//Q2
console.log("Q2");

let pp=document.querySelector("p");

console.log(pp.getAttribute("class"));

// changing class="para" as class="newClass";
pp.setAttribute("class","newClass");  
console.log(pp.getAttribute("class"));

/*its getting replaced the para class gets overwritted 
by newClass but u dont want that u want both class
ki property aaye and it belongs to
both class*/

/*use classList to add new class likke
more class and not overrwrite the previous
class but add more than 1 class
and even remove any class*/

/*now after the class change it has become newClass from para so now time to add para too*/

pp.classList.add("para");

/* now it has both the class para and newCLass*/

console.log(document.body.innerHTML);
