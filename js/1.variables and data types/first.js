console.log("Welcome to Hello world");
console.log("Prince");
console.log("Welcome to js");
/*iska output dekhne keliiye 
inspect ke console section me jaake
each line enter krke aata h
output*/

name="MSD";
console.log("name");
console.log(name);
/*double quotes hatade if u 
wanna print a int or string
likewise*/
price=150.50;
console.log(price);
isFollow=false;
console.log(isFollow);


Console="apna college";
console.log(Console);

/* console="apna college";
console.log(console);

wont work*/
let fullName="Prince";
/*let fullName="Harssh";
this will error in console
because redeclaring it

but u can update it like this */

fullName="Reverse_Silence";


console.log(fullName);


var name="YuH";
var name="yuh";
var name="yuH";

console.log(name);
/*in var u can redeclare it too
as well as update, so its
bad so never use em always use 
let and for const use const*/

const PI=3.14;
console.log(PI);

/*const variables me neither can u
redeclare and nor update em*/


let a;
console.log(a);
/*a is a undefined variable*/

/*const b;
console.log(b);

this will give a error because
constants need to be given
a value let is okay 
const is not to leave undefined*/



/* let is a block scope variable
*/

{
    let c=6;
    console.log(c);



}
{

    let c =7;
    console.log(c);
}
/*you can also see the datatype by using 
typeof nameofvariable in the console ,
pls do it to see it urself*/

let pricee=100.50;
isFriend=false;
let x=null;
/*check its type and value in
console*/


let v=BigInt("123");
let w=Symbol("Hello!");

/*object*/

const  student={
fulllName:"rahul kumar",
age:16,
cgpa:8.2,
isPass:true,                   

}
/*note theres a coma not semicolon
after each key:value,}*/
console.log(student.age);
console.log(student["cgpa"]);

student.age=student.age + 1;
console.log(student.age);

student["fulllName"]="Rahul Sharma";
console.log(student.fulllName);

/*
also one more thing to note

in console,
if  u do 1+2 output would be 3
but if u do "12" +1 
output would be "121"
because in string it adds the other
string just like concatenation
"abcd" +123
"abcd123" */