
// Very Easy


function min(a,b){
console.log(Math.min(a,b));
}

min("80","109");


// Easy


var stu = [];
var age = [];

stu[0] = "Samuel Hernandez";
stu[1] =  "Shimran Rodrigues";
stu[2] =  "Daniel Mitch";
stu[3] = "Tan Lee";

age[0] = "18";
age[1] =  "20";
age[2] =  "21";
age[3] = "19";


console.log("Hello, my name is", stu[1], "and I'm", age[1],"years old.");


//Medium


var x = prompt("Enter a number");
var num1 = parseInt(x);

if (x === "1") {
    console.log("January");
}else if (x === "2"){
    console.log("February");
}else if (x === "3"){
    console.log("March");
}else if (x === "4"){
    console.log("April");
}else if (x === "5"){
    console.log("May");
}else if (x === "6"){
    console.log("June");
} else if (x === "7"){
    console.log("July");
}else if (x === "8"){
    console.log("August");
}else if (x === "9"){
    console.log("September");
}else if (x === "10"){
    console.log("October");
}else if (x === "11"){
    console.log("November");
}else if (x === "12"){
    console.log("December");
}else if (x < "1"){
    console.log("invalid");
}else if (x< "12"){
    console.log("invalid");
}

// Hard

var tom_height = "9"
var jerry_height = "10"

var tom_mass = "8"
var jerry_mass = "45"

var tom_BMI = (tom_mass/(tom_height*tom_height));

var jerry_BMI = (jerry_mass/(jerry_height*jerry_height));


if(tom_BMI < jerry_BMI){
    console.log("Is Tom's BMI higher than Jerry's?  false");
}
else if (tom_BMI > jerry_BMI)
{
    console.log("Is Tom's BMI higher than Jerry's?  true");
}
