/*for(int i=1;i<=5;i++){
    console.log("Hello World");
}
wrong*/
for(let i=1;i<=5;i++){
    console.log("Hello World");
}
console.log("loop has ended");  
/*check the console it says u print
hello wrold 5 times , on left u see
count 5 circle*/
/*sum of 1 to n*/
let sum=0;
for(let i =1;i<=6;i++){

    sum=i+sum;
}
console.log(sum);
/*u cant print i now after loop has
ended coz its a block variable
but if u declare it by var i 
inside loop then now here u couldve 
printed it but dont use var*/


//while loop

let i=1;
while(i<=5){

    console.log("i=",i);
    i++;
}

//do while loop
/* do while loops advantage is that
it works atleast once 
because the condiition starts getting
applied fromt the second time
first time the do does its work
and from the second time the 
condition operates*/
let j=20;

do{
console.log("apna college");
j++;
}
while( j<=10);
/*condition is false but it will
run once*/


/*for-of loop*/


let str="Javascript";
for(let i of str){

    console.log("i=",i);
}
/*calc length of string*/
let len=0;

for(let i of str){

  len++;
  
}
console.log(len);

/*for-in loop*/

let student={
name:"prince",
cgpa:8.12,
isPass:true,
}
for(let i in student){
    console.log("i=",i,"value=",student[i]);
}
/*stringsss*/

let nameee="prince";
let namee='princee';

/*can type str.length
in console to print the lenght
of the string
j llike you do obj.key to print 
keys value 
also can console.log printit*/
console.log(namee[0]);
console.log(namee[1]);
console.log(namee[2]);
console.log(namee[3]);
let obj={
item:"pen",
price:10,
}
console.log("the price of",obj.item,"is",obj.price,"rupees");


let template=`the price of ${obj.item} is ${obj.price} rupees`;
console.log(template);
/*\t or \n is counted as 1 charcter
in a string so when u print its
length \t takes a single chracter*/
/* should be kniwing can be asled
as a tricky interview question*/


/*string methods*/
//upper and lower case
namee.toUpperCase();
console.log(namee);
let newStr= namee.toUpperCase();
console.log(newStr);
/*or console.log(namee.toUpperCase());*/

let nnewStr=namee.toLowerCase();
console.log(nnewStr);
//trim
let Str = "    Apna College  JS   ";
Str=Str.trim();
console.log(Str);

//slice
console.log(namee.slice(0,5));
/*in the ooutput 0 to 4 indices
would be printed*/
/* and if u dont wrtie ending index
which is optional , itll print
from start index to actual end 
of the string but trim would
be there in the start*/
//concatenation
console.log(namee.concat(nameee));

//replace

let sTr="hello";
console.log(sTr.replace("h","y"));

console.log(sTr.charAt(0));


//Practice Ques

let name= prompt("enter your name");
let at="@";
let length=name.length;
let nEwStr=at.concat(name);
console.log(nEwStr.concat(length));