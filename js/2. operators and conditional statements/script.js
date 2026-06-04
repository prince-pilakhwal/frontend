let a=4;
let b=6;
let c=2;

console.log("a=",6,"&b=",4);
/*here we dont do %d %d , a,b 
 so see this */
console.log("a+b=",a+b);
console.log(a+b);
console.log("a*b=",a*b);

console.log("b/a=",b/a);
console.log("b % a=",b%a);
console.log("a**c=",a**c);
console.log("a++=",a++);
//this is still 4
/*unary operators doesnt works like
this u need to write them outside 
then print*/
a++;
b++;
console.log("a = ",a);
/*this will show 6 coz i did
a++ twice once in the above console
and then here*/
console.log("b = ",b);

/*u can even wrote ++a or --a
botth are valie a++is called postincrememnt
and ++a is called pre incrememnt 
also in preincrement incrememnt happens
on the line 
but on post incrememnt incrememnet
happens on the next line like eg
in the a++ line it said a=4 now see
here a is 6 */
console.log("a++= ",++a);

a+=2;
console.log("a=",a);
/*comparision operator*/

let d=5;
let e=6;
console.log("5==6",d==e);//false
let f="5";
console.log("d==f",d==f);
console.log("d===f",d===f);

/*logical operators*/


console.log("d>e && e>d",d>e && e>d);//false
console.log("d>e || e>d",d>e || e>d);//true

console.log("d>e || e>d",!(d>e || e>d));


/*conditional statements*/

let age=25;
 
let mode="dark";
let color;

if(mode==="dark"){
    color="black";
}else{

    color="white";
}


console.log(color);


if(d%2===0){
    console.log(d,"is even");

}
else{
    console.log(d,"is odd");
}

/*learn else if statements from
the notes pdf*/

/*ternary operator*/
d%2===0?console.log("is even"):console.log("is odd");
d%2===0?"is even":"is odd";

 