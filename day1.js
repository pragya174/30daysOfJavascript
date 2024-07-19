// Activity 1: Variable Declaration
// -> Task 1:
var num1 = 6;
console.log(num1); // output: 6

// -> Task 2:
let name1 = "Pragya this side!";
console.log(name1); // output: Pragya this side!

// Activity 2: Constant Declaration
// -> Task 3:
const x = true;
console.log(x); // output: true

// Activity 3: Data Types
// -> Task 4:
let num = 5; //number
let str = "hello"; //string
let b = false; //boolean
let obj = {  //object
    name: 'Shiya',
    email: 'shiya@gamil.com'
}
let fruits = ['mango','apple','lichi','grapes'];  //array
console.log(typeof(num)); //output: number
console.log(typeof(str)); //output: string
console.log(typeof(b)); //output: boolean
console.log(typeof(obj)); //output: object
console.log(typeof(fruits)); //output: object

// Activity 4: Reassinging Variables
// -> Task 5:
let num2 = 7;
console.log(num2); //output: 7
num2 = 12;
console.log(num2); //output: 12

//Activity 5: Understanding const
// -> Task 6:
const str2 = "heyy";
console.log(str2); //output: heyy
// str2 = "world";
// console.log(str2); TypeError: Assignment to constant variable.


// Feature Request:
// 1.Variable Types Console Log:
let numType = 23;
let strType = "Hello Beautifull World";
let boolType = true;
let objType ={
    country: 'India',
    state: 'Uttar Pradesh'
};
let arrType= [1,2,3,4];
let undefineType;
let nullType= null;

console.log("Value: ", numType,",Typeof: ", typeof(numType));
//output: Value:  23 ,Typeof:  number
console.log("Value: ", strType,",Typeof: ", typeof(strType));
//output: Value:  Hello Beautifull World ,Typeof:  string
console.log("Value: ", boolType,",Typeof: ", typeof(boolType));
//output: Value:  true ,Typeof:  boolean
console.log("Value: ", objType,",Typeof: ", typeof(objType));
//output: Value:  {country: 'India', state: 'Uttar Pradesh'} ,Typeof:  object
console.log("Value: ", arrType,",Typeof: ", typeof(arrType));
//output: Value:  (4) [1, 2, 3, 4] ,Typeof:  object
console.log("Value: ", undefineType,",Typeof: ", typeof(undefineType));
//output: Value:  undefined ,Typeof:  undefined
console.log("Value: ", nullType,",Typeof: ", typeof(nullType));
//output: Value:  null ,Typeof:  object

//2.Reassignment Demo:
let variable = "Hello, I can be reassigned";
console.log(variable); //output: Hello, I can be reassigned
variable = "I am reassigned";
console.log(variable); //output: I am reassigned

const constant = "hello, I cannot be reassinged";
console.log(constant); //output: Hello, I cannot be reassinged
constant = "I am not reassigned";
console.log(constant); //TypeError: Assignment to constant variable.