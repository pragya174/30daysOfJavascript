//Activity 1:Function Declaration 
//Task 1:
let num;
let n;
function number(num) {
    n= num % 2;
    return n;
}
number(5);
if(n == 0){
    console.log("number is even.");
} else {
    console.log("number is odd.");
}
//output: number is odd.

//Task 2:
function square(num){
    sq= num * num;
    return sq; 
}
let squarenum = square(7);
console.log("square of a num is ",squarenum);
//output: square of a num is 49

//Activity 2:Function Expression
//Task 3:
let num1;
let num2;
function maximum(num1,num2){
    return num1 > num2 ? num1 : num2
}
let max= maximum(45,65);
console.log("maximum num is ",max);
//output: maximum num is 45

//Task 4:
function conca(str1,str2){
    return str1 + str2;
}
let concatenate= conca("Hello ","World");
console.log(concatenate);
//output: Hello World

//Activity 3:Arrow Functions
//Task 5:
let sum= (num1,num2)=>{
    return num1+num2;
}
let s= sum(4,5);
console.log("Sum of two number is: ",s);
//output: Sum of two number is: 9

//Task 6:
const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("hello", "e")); // Output: true
console.log(containsCharacter("hello", "a")); // Output: false



//Activity 4:Function Parameters and Default Values
//Task 7:
function mul(num1,num2=7){
    return num1 * num2;
} 
let product= mul(2);
console.log("Product of two num is ",product);
//output: Product of two num is 14

//Task 8:
function person(name,age=17){
    let greet= "Good Morning " + name + " your age is " + age;
    return greet;
}
let p= person("Pragya");
console.log(p);
//output: Good Morning Pragya your age is 17

//Activity 5: Higher-Order Functions
//Task 9:
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
const sayHello = () => {
    console.log("Hello!");
};

repeatFunction(sayHello, 5);
//Output: "Hello!" 5 times

//Task 10:
function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}
const double = x => x * 2;
square = x => x * x;

const result = applyFunctions(double, square, 5); // First doubles 5 to get 10, then squares 10 to get 100
console.log(result); // Output: 100
