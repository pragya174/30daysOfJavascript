//Activity 1: For Loop
//Task 1:
let i;
for(i=1;i<=10;i++){
    console.log(i);
}
//Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//Task 2:
let n = 5;
console.log("Table of",n,":");
for(i=1;i<=10;i++){
    console.log(n," x ",i," = ",  i*n);
}
//Output:
// Table of 5 :
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


//Activity 2: While Loop
//Task 3:
i=1;
let sum = 0;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log("sum of num from 1 to 10 is ",sum);
//Output: sum of num from 1 to 10 is  55

//Task 4:
i=10;
while(i>0){
    console.log(i);
    i--;
}
//Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

//Activity 3: Do-While Loop
//Task 5:
i=1;
do{
    console.log(i);
    i++;
}while(i<=5);
//Output:
// 1
// 2
// 3
// 4
// 5

//Task 6:
i = 1;
let num = 4;
let fact = 1;
do{
    fact= fact * i;
    i++;
}while(i<=num);
console.log("factorial is: ",fact);
//Output: factorial is: 24

//Activity 4: Nested Loop
//Task 7:
n=5;
let str= "";
let j;
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        str += "*";
    }
    str += "\n";
}
console.log(str);
//Output: 
// *
// * *
// * * *
// * * * *
// * * * * *

//Activity 5: Loop Control Statements
//Task 8:
for(i=1;i<=10;i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}
//Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

//Task 9:
for(i=1;i<=10;i++){
    if(i == 7){
        break;
    }
    console.log(i);
}
//Output:
// 1
// 2
// 3
// 4
// 5
// 6

