//Activity 1: If-Else Statements
//Task 1:
let num1= 8;
if(num1 > 0){
    console.log("Number is positive.");
} else {
    console.log("Number is negative.");
}

//Task 2:
let age=14;
if(age >= 18){
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

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

//Activity 3: Switch Case
//Task 4:
let i;
for(i=1;i<=7;i++){
    switch(i){
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
}

//Task 5:
let score= 98;
switch(score){
    case 1:
        if(score >= 90 && score <= 100){
            console.log("Grade A");
            break;   
        }
    case 2:    
        if(score >= 80 && score <= 89){
            console.log("Grade B");
            break;   
        }
    case 3:    
        if(score >= 70 && score <= 79){
            console.log("Grade C");
            break;   
        }
    case 4:
        if(score >= 60 && score <= 69){
            console.log("Grade D");
            break;   
        }    
    case 5:
        if(score >= 50 && score <= 59){
            console.log("Grade E");
            break;   
        }        
}

//Activity 4: Conditional(Ternary) Operator
//Task 6:
let num5= 10;
if((num5 % 2 == 0)? console.log("number is even."): console.log("number is odd."));

//Activity 5: Combining Conditions
//Task 7:
let year= 2024;
if(year / 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(year , " is a leap year.");
} else {
    console.log(year," is not a leap year.");
}