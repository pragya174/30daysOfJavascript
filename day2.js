//Activity 1: Arithmetic Operators
//Task 1:
let num1= 4;
let num2= 5;
console.log("addition of two num is: ",num1 + num2);
//Output: additon of two num is: 9

//Task 2:
let num3= 8;
let num4= 3;
console.log("subtraction of two num is: ",num3 - num4);
//Output: subtraction of two num is: 5

//Task 3:
let num5= 10;
let num6= 12;
console.log("multiplication of two num is: ",num5 * num6);
//Output: multiplication of two no is: 120

//Task 4:
let num7= 12;
let num8= 2;
console.log("division of two num is: ",num7 / num8);
//Output: division of two no is: 6

//Task 5:
let num9= 9;
let num10= 3;
console.log("remainder: ",num9 % num10);
//Output: remainder: 0

//Activity 2:Assignment Operators
//Task 6:
num1 += 8;
console.log(num1);
//Output: 12

//Task 7:
num2 -= 4;
console.log(num2);
//Output: 1

//Activity 3:Comparison Operators
//Task 8:
let num11= 15;
let num12= 23;
if(num11 > num12){
    console.log("max num is: ",num11);
} else {
    console.log("max num is: ",num12);
}
//Output: max num is: 23

if(num11 < num12){
    console.log("min num is: ",num11);
} else {
    console.log("min num is: ",num12);
}
//Output: min num is: 15

//Task 9:
let age= 17;
if(age >= 18){
    console.log("Congrats, you are eligible to vote!!");
} else {
    console.log("Oops,you are under-age.");
}
//Output: Oops,you are under-age.

age=20;
if(age <= 19){
    console.log("You are a child.");
} else {
    console.log("You became an adult.");
}
//Output: You became an adult.

//Task 10:
let num13= 87;
let str1= "87";
if(num13 == str1){
    console.log("True");
} else {
    console.log("False");
}
//Output: True

if(num13 === str1){
    console.log("True");
} else {
    console.log("False");
}
//Output: False

//Activity 4:Logical Operators
//Task 11:
age=15;
if(age >= 13 && age <= 19){
    console.log("You are a teenager.");
}
//Output: You are a teenager.

//Task 12:
age=10;
if(age < 13 || age > 19){
    console.log("You are not a teenager.");
}
//Output: You are not a teenager.

//Task 13:
let bool= true;
if(bool !== false){
    console.log("true");
} else {
    console.log("false");
}
//Output: true

//Activity 5:Ternary Operator
//Task 14:
if(num3 > 0 ? console.log("Num is positive") : console.log("Num is negative"));
//Output: Num is positive

