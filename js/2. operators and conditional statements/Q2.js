let marks=prompt("enter marks outa 100");

if(marks>=0 && marks<50){
    console.log("F grade");
}
else if(marks>49 && marks<60){
    console.log("D grade");
}
else if(marks>59 && marks<70){
    console.log("C grade");
}
else if(marks>69 && marks<80){
    console.log("B grade");
}
else if(marks>79 && marks<=100){
    console.log("A grade");
}