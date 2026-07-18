let marks=[45,53,42];
console.log(marks);

//to print arrays length

console.log(marks.length);//property

/*property and method ka diffference

property- returns a value
method- which does some work

*/


let heroes=["ironman","hulk","thor","spiderman","kasparov"];
console.log(heroes);
//for loop
for(let i=0;i<heroes.length;i++){

console.log(heroes[i]);
}

//for of   
/*element ka shortform el likhneka  taki samajneme 
asani  ho , element of a array esa, */

for(let el of heroes){

    console.log(el);
}

/*thats how for-of loop works for arrays
it prints all the element just by writing the 
statement let el of arr thats it.*/

for(let el of heroes){

    console.log(el.toUpperCase());
}

//Practice ques1
//for loop
let arr=[85,97,44,37,76,60];
let sum1=0;
let sum2=0;
for(let i=0;i<arr.length;i++){
sum1=sum1+arr[i];
    
}
console.log(sum1/arr.length);
console.log("avg marks are",sum1/arr.length);
//for of 
for(let ell of arr){
    sum2+=ell;

}
console.log(`avg marks are ${sum2/arr.length}`);

//Practice Ques 2

console.log("Practice Ques2");
let prices=[250,645,300,900,50];

for(let elll of prices){

    elll=elll - (0.1*elll);
    console.log(elll);
}
/*this does not changes the array just prints the
new chnaged copy and u cant print the new array
just loop me element by element...
inorder to change it and print the new array 
outside the loop do what is done in the pic 
PracticeQ2*/

/*for loop

for(let i=0;i<prices.length;i++){


let offer=items[i]/10;
items[i]-=offer;
}
console.log(items);

*/
console.log("Now methods in arrays we got 8 of emmm ");


let food=["potato","apple","litchi","tomato","chips"];

console.log(food);
food.push("oats");
food.push("peanut","banana");
console.log(food);

food.pop();//deleted banana
console.log(food);
let deleted=food.pop();//deleted peanut
console.log(food);
console.log("deleted",deleted);

//toString()
console.log(food);
let string=food.toString();//to show it returns the str too
console.log(string);

//or just u can do 
console.log(food.toString());

let numbers=[97,86,54,36];
console.log(numbers);
console.log(numbers.toString());

//concat()

let marvelHeroes=["thor","spiderman","ironman","Antman","Drstrange"];
let dcHeroes=["superman","batman"];
console.log(marvelHeroes.concat(dcHeroes));
//2
let hero=marvelHeroes.concat(dcHeroes);
console.log(hero);
let indianHeroes=["shaktiman","krish"];
console.log(marvelHeroes.concat(dcHeroes,indianHeroes));
//3


//unshift()
marvelHeroes.unshift("hulk");
console.log(marvelHeroes);

//shift()

let val= marvelHeroes.shift();
console.log(marvelHeroes);
console.log("deleted",val);

//slice()

console.log(marvelHeroes);


console.log(marvelHeroes.slice(1,3));

/* also if u just mention the starting index and
not the ending index it prints tillt he last index so
for example for this array if u write
console.log(marvelHeroes.slice(1));
it returns from spiderman to DrStrange...
and if u do slice() and dont mention neither starting
index nor the ending one , it returns the full
array without slicing it up*/


//splice()
 //replace
let forsplice=[1,2,3,4,5,6,7];// 1,2,100,110,5,6,7
//forsplice.splice(2,2,100,110);

//add
//forsplice.splice(2,0,110,111);//1,2,110,111,3,4,5,6,7
console.log(forsplice);

//remove
/*removing 3,4*/
forsplice.splice(2,2,);//1,2,5,6,7
console.log(forsplice);

/*starting index "gets" counted for deleting so 
in 1,2,3,4,5,6,7 

if u wanna delete 3,4
starting index is 2 
then after coma write 2 so as to delete
2 of the next elements
forsplice.splice(2,2,);
if u j wanna delete and not replace do this*/

/*NOTE the splice fn if u just write the starting index
and in the delete count place u domt write anything then 
it deletes all the entries from that starting index
like  forsplice.splice(2);
the array now has become 1,2 thats it 
so basically it is 'sliced'*/
/*also if u dont pass anything 
like arr.splice();
there is no change in the array*/


/*Last practice Ques*/
console.log("Practice Ques");


console.log("Qs");
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//a
companies.shift();//remember pop for end and shift for start
console.log(companies);

//b
companies.splice(1,1,"Ola");
console.log(companies);

//c
companies.push("Amazon");
console.log(companies);










