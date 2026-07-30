console.log("hello");
window.console.log("hello");


//lean the syntax if you want to print any object 
/*you can put dot after writing the main object
and then write the subobject to access that subobject*/

console.dir(window.document);
console.log(window.document);


//know that even console.dir is also a part of window coz all the code is inside of window object only.


/*so you can access your html code in js file 
by the help of window object and document subobject inside the window object. coz that stores the html code
the document object is a model meaning a representation of the html code*/
/*just like this*/

console.dir(document);//property
console.log(document);//actual code
console.log(document.body);//to fetch the code of body tag ,, body is a object as shown in the DOM model.

console.log(document.head);

/*why it is imp to access html code from js?
coz you need to change the html code from js code
example- if user press a button made in html in the
webpage , the theme should set to dark 
this is a dynamic change(rumtime change)
this cannnot be done by html or js coz uska code is fix
only js can change the code while the page is running

so to write this code in js in js
youll take help of DOM model to change the html code*/


/*coz at the end js is the logic of html no
html is the structure
css is the styling
js is the logic

to make a site functional you need to change its html
code no? you do that from js file by DOM model concept*/



/*
document.body.style.background="green";
sets the baackground as green 
***dynamic change***
*/

/*now yk we need to change some html tags with the help of js 
means here, but how to select them? by writing tag?
class?id? what  . (only these 3);
 
so here comes the selection*/

/* always write the script tag inside body only and not in 
head coz then document.body will not be accessible in js file
to know this better watch dom yt video part 1 
from 39:00
pls do watch for clearity*/

//selection by id
let hading=document.getElementById("headingggg");//wrong name and wrong search to see whats the output **it is null** but fro class it returns a empty html collection with length 0.
console.log(hading);
let heading=document.getElementById("heading");
console.dir(heading);
console.log(heading);

//selection by classname

/*this .getElementsByClassName returns a html collection which is similar to array*/
/*to get html code from class ka html collection use this[0][1]*/

let hheading=document.getElementsByClassName("hheading");
console.dir(hheading);
console.log(hheading);
console.log(hheading[0]);
console.log(hheading[1]);

//selection by tag name

let parahs=document.getElementsByTagName("p");
console.log(parahs);
console.log(parahs[0]);
console.log(parahs[1]);


/*never use these 3 document.getElementsByClassName
always use queryselector as they can select all
no need to remember these 3 just remember .querySelector();
*/

//Query selector

//for tag

let firstEl=document.querySelector("p"); //returns first element
console.dir(firstEl);
console.log(firstEl);

let elements=document.querySelectorAll("p"); //returns all elements or a node list node yk in DOM model tree like structure ive depicted all the elements together with window and document object are all nodes
console.dir(elements);
console.log(elements);
console.log(elements[0]);
console.log(elements[1]);
//for class
let elementss=document.querySelectorAll(".hheading"); //always write .(dot) before writing the class name
//hheading is wrong but .hheading is right
console.dir(elementss);
console.log(elementss);
console.log(elementss[0]);
console.log(elementss[1]);



//DOM properties .... inside the console.dir() all the properties you see , so some of those properites... are listed here

//tagName

console.log(firstEl.tagName);//paragraph tha (tag)
console.log(heading.tagName);//heading h (id)
console.log(elementss.tagName);//wont work coz elementss is a class

//innerText

console.log(document.body.innerText);

/*can also use the innertext property to change the code*/
heading.innerText="hoo";
/*heading ko index.html me whats up dawg set kiya tha*/


//innerHTML
console.log(document.body.innerHTML);

heading.innerHTML="<div><h2>whats up</h2></div>"//h1 ke andar ek naya div jiske andar ek h2

/*no need to write <h1></h1> uper*/


//textContent
console.log(document.body.textContent);




/*take it like this:

to change the h1 heading "new Heading"
u do 
let heading=document.querySelector("h1");//takes the first h1
heading.innerText="old heading"


to change the format like for bold and italic u use innerHTML

heading.innerHTML="<b><i>old Heading</i></b>"*/


//Practice Ques

console.log("Practice Ques");
let practicee=document.querySelector("#practice");
practicee.innerText= practicee.innerText + " From Apna College Students"
//this is concatenate


let boxx=document.querySelectorAll(".box");
let index=1;
for(El of boxx){
    El.innerText=`new value ${index}`;
    index++
}

//yaato loops yato ye 

/*
boxx[0].innerText="pehla";
boxx[1].innerText="dusra";
boxx[2].innerText="teesra";
*/


console.log("DOM part 2");

let atr=document.querySelector("#diva");


//getAttribute and setAttribute
let iddd=atr.getAttribute("id");
console.log(iddd);

atr.setAttribute("id","woho");
console.log(atr);
//this changes the value of attribute thats just wow! i changed the id of a tag of html from js!


//node.style

let tagg=document.querySelector(".hheading");

// as seen in notes you can change the styling too which works only if you added the style with inline styling

//can also set visibiliy=hidden and hide any element too
/*
node.style.visibility="hidden";
*/


//Insert Elements

/*inserting is a 2step process where you first create then insert
1.create
2.insert
*/

//create

let el=document.createElement("div");
//let el=document.createElement("tagName");

let le=document.querySelector("#yelo")
let newBtn=document.createElement("button");

console.log(newBtn);
console.log(newBtn.innerText);
newBtn.innerText="Click Me!";
console.log(newBtn.innerText);

/*koi bhi tag ke andar lekin last me add karna hoto
 APPEND like here div ke andar par last me meaning 
 after list u wnna add smth

tag.append(newtag);
idhar div ke andar last me newBtn daalna h to:

le.append(newBtn); where le is let le=document.querySelector("#yelo") */
//node.append

le.append(newBtn);

/*node ke andar but last me nahi start me uske liye 
PREPEND                                                                              */
//node.prepend


let newBttn=document.createElement("button");
newBttn.innerText="Click Me!";
le.prepend(newBttn)

//node.before

let newBttnn=document.createElement("button");
newBttnn.innerText="Click Me!";
le.before(newBttnn)

//node.after

let newBbttnn=document.createElement("button");
newBbttnn.innerText="Click Me!";
le.after(newBbttnn);

/*can even add a heading this way at the top of the page?
how? by prepending it on body tag.*/

let heeading=document.createElement("h1");
heeading.innerHTML="<i>Hi, I am new </i>";


/*or find body tag by query Selector and then write 
node.prepend();*/ 

//node.remove();

let nodee=document.querySelector("#deletekaro");

nodee.remove();



/*this is how to add and delete an element
 of html from js */




 console.log("Practice Ques from next files , index2.html ");
