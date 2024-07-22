//Activity 1: For Loop
//Task 1:
let i;
for(i=1;i<=10;i++){
    console.log(i);
}

//Task 2:
let n = 5;
console.log("Table of",n,":");
for(i=1;i<=10;i++){
    console.log(n," x ",i," = ",  i*n);
}

//Activity 2: While Loop
//Task 3:
i=1;
let sum = 0;
while(i>=10){
    sum=sum+i;
    console.log("sum of num from 1 to 10 is ",sum);
    i++;
}

//Task 4:
i=10;
while(i>0){
    console.log(i);
    i--;
}

//Activity 3: Do-While Loop
//Task 5:
i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

//Task 6:
i = 1;
let num = 4;
let fact = 1;
do{
    fact= fact * i;
    i++;
}while(i<=num);
console.log("factorial is: ",fact);

//Activity 4: Nested Loop
//Task 7:
for(i=1;i<=5;i++){
    for(j=i;j<=5;j++){
        console.log("*");
    }
}

//Activity 5: Loop Control Statements
//Task 8:
for(i=1;i<=10;i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

//Task 9:
for(i=1;i<=10;i++){
    if(i == 7){
        break;
    }
    console.log(i);
}