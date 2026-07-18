console.log("Hello");

"abc".toUpperCase();

[1,2,3].push(4);

//these are all functions all 3 
//remember method is a fn too


function myFunction(){

    console.log("YuH");
}
myFunction();

/*see the image.png too*/

function one(msg,n){
    console.log(msg*n);//output is NaN which means Not a Number so the output is Not a Number
}
one("I love JS",100);


//sum of 2 numbers

let sum;
function fnn(a,b,sum){

    sum=a+b;
    console.log(sum);
    /*or return sum; and after fn do let val=sum(,); and print that val ooutside the fn*/

}
fnn(3,4,sum);


//sum fn with both normal and arrow function

function sm(a,b){
   console.log(a+b);

}

/*(a,b)=>{
        console.log(a+b);

} 
        the code wont run like this...
*/
const arrowSum=(a,b)=>{
        console.log(a+b);

}
/* even here inorder to run the code 
printing arrowSum or typing arrowSum in the console 
will just print the "
=(a,b)=>{
        console.log(a+b);

}
"
so inorder to call the fn u call it by arrowSum(a,b);
like this so the calling statement is the same*/

arrowSum(5,4);
/*arrow fn starts with paranthesis directly so 
the const car is just a variable which stores function
u can also redeclare the value of that variable but fot
that instead of const u need to use let

arrow fn genrlly used to make fn for small use
and not for those fn which has 5,6 lines of code in them
for ex fns like printing smth etc etc are in arrow fn
form
*/













/*Practice Qs*/
let str="prince";

function fn(str){
let count=0; 
for(let i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o'|| str[i]=='u'){
        count++
    }
}
console.log(count);
}

fn(str);
//can also use for of loops for this


const vowels=(str)=>{
    let count=0;
for(let i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o'|| str[i]=='u'){
        count++
    }
}
console.log(count);
}
vowels(str);



//foreach loop
console.log("forEach loop");


let arr=["pune","delhi","mumbai"];

function abc(){
    console.log("hello");
}
function Func(abc){
    return abc;
}
//callback is a fn which is passed as an argument
//to another fn

arr.forEach(function printVal(val,idx,arr){
    console.log(val.toUpperCase(),idx,arr);
})

//Practice Ques

let arrr=[5,3,8,4,7];

arrr.forEach(

    (val)=>{
        console.log(val*val);
    }
)

//some more array methods

//map
console.log("map");

/*lets say make a new arr which stores the elements-1  wala element
*/
let newarr=arrr.map(
    (val)=>{
        return val-1
    }
)
console.log(newarr);


//filter
console.log("filter");
/* this can be done my map too theres nothing new and need for this filter method
let newArr=arrr.filter(

    (val)=>{
        if(val%2==0){return val;}
    }
)
console.log(newArr);
*/
let newArr=arrr.filter(
    (val)=>{
        return val%2==0;
    }
)
console.log(newArr);


//reduce
console.log("reduce");

let _arr=[1,2,3,4];
/*
_arr.reduce(
(val,idx,arr)=>{});

    isme 
reduce me value hota hai or ek result hota hai joki 
notes me dekhna accumulator hai

or notes me value ko currentvalue kaha gaya hai 
which is nothing but the normal value

so reduce me 2 parameter hota hai,previous and current value
jisko me likhna pasand krta hu
 result and current as res and curr but u can write anything there!
current value ,, current value is nothing but value
and result is youll get to know ...

}

);
*/
const output=_arr.reduce(
(res,curr)=>{
    return res+ curr;
}
);

console.log(output);

/*the reduce methods working is different
in the return section*/

/*now whats happening w the code?

the array is [1,2,3,4];

see ss1.png

the method takes 2 parameter out of which one is
previous and one is current

meaning the result is previous and 
current is current value

they always starts from arrays idx0; therefore
res is idx0 and curr is idx1 

res is 1 and curr is 2 ,,, of the array 

we return res+curr, this return gets stored in res only

so res + curr means 1+2=3
now res is 3 
now res+curr means =3+3 coz curr is now 3 coz current value keeps moving index wise after 1 operation
now res is 6
now res+curr means 6+4=10 ....
this last res + curr gets returned which is 10



*/

//reduce se largest element of an array

console.log("largest no. of an array by reduce");

/* just return the largest out of res and curr
*/


let largest=[4,5,6,1];

/* if u return the largest b/w res and curr

the returned value will become res now
coz that value gets stored in res

and curr keeps moving forward and compares with res
if bada itll get returned and become res... last me largest value gets returned...
*/

const max=largest.reduce(
    (res,curr)=>{

        if(res>curr)return res;
        if(curr>res)return curr;
    
    }
)
console.log(max);
console.log("this is how u find largest element of array using reduce");



//Practice Ques

let markks=[86,55,39,73,93,96,98,64];

const ninty=markks.filter(
    (val)=>{
        return val>90;
    }
);
console.log(ninty);



console.log("Ques 2");

let n=prompt("enter n!");
console.log(n);

let numbers=[];
for(let i=0;i<n;i++){
    numbers[i]=i+1;

}

const pehla=numbers.reduce(
    (res,curr)=>{
        return res+curr;

    }
)


const dusra=numbers.reduce(
    (res,curr)=>{
  return res*curr;
    }
)

console.log("sum=",pehla);

console.log("factorial=",dusra);


