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


let heading=document.getElementById("heading");
console.dir(heading);
console.log(heading);


/*this .getElementsByClassName returns a html collection which is similar to array*/

let hheading=document.getElementsByClassName("hheading");
console.dir(hheading);
console.log(hheading);
console.log(hheading[0]);
console.log(hheading[1]);





