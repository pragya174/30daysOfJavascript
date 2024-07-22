//Activity 1: If-Else Statements
//Task 1:
let num1= 8;
if(num1 > 0){
    console.log("Number is positive.");
} else {
    console.log("Number is negative.");
}
//output: Number is positive.

//Task 2:
let age=14;
if(age >= 18){
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//output: You are not eligible to vote.

//Activity 2: Nested If-Else Statements
//Task 3:
let num2=8;
let num3=95;
let num4= 65;
if(num2 > num3 && num2 > num4){
    console.log("max number is: ",num2);
} else if(num3 > num2 && num3 > num4){
    console.log("max number is: ",num3);
} else {
    console.log("max number is: ",num4);
}
//output: max number is: 95

//Activity 3: Switch Case
//Task 4:
let day= 4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;   
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;    
}
//output: Thrusday

//Task 5:
let number= 98;
let score=Math.floor(number / 10);
switch(score){
    case 10:
    case 9:
            console.log("Grade A");
            break;   
    case 8:    
            console.log("Grade B");
            break;   
    case 7:   
            console.log("Grade C");
            break;   
    case 6:
            console.log("Grade D");
            break;   
    case 5:
            console.log("Grade E");
            break;   
}
//output: Grade A

//Activity 4: Conditional(Ternary) Operator
//Task 6:
let num5= 10;
if((num5 % 2 == 0)? console.log("number is even."): console.log("number is odd."));
//output: number is even.

//Activity 5: Combining Conditions
//Task 7:
let year= 2024;
if(year / 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
//output: 2024 is not a leap year.

//Feature Request:
//1.Number Check Script:
let num6= -89;
if(num6 > 0){
    console.log("Number is positive.");
} else if(num6 < 0) {
    console.log("Number is negative.");
} else {
    console.log("Number is zero.");
}
//Output: Number is negative.

//2.Voting Eligibility Script:
age=19;
if(age >= 18){
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//output: You are eligible to vote.

//3.Day of the Week Script:
day= 7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;   
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;    
}
//Output: Sunday

//4.Grade Assignment Script:
number= 89;
score=Math.floor(number / 10);
switch(score){
    case 10:
    case 9:
            console.log("Grade A");
            break;   
    case 8:    
            console.log("Grade B");
            break;   
    case 7:   
            console.log("Grade C");
            break;   
    case 6:
            console.log("Grade D");
            break;   
    case 5:
            console.log("Grade E");
            break;   
}
//output: Grade B

//5.Leap Year Check Script:
year= 2005;
if(year / 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
//output: 2005 is not a leap year