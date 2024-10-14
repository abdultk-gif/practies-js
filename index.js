// subtraction using functions
function subtract(a, b) {
    return a - b;
}
var result = subtract(20,12);
console.log("subtract",result);
// adding using functions
function add(a,b,c){
    return a+b+c;
}
var sum=add(9,7,4);
console.log("sum",sum);
// multiplication / function expression
var mul=function(a,b){
    return a*b;
}
var multi= mul(10,10);
console.log("multiplication",multi);


// Arrays
var fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];

// Print all elements present in the fruits array and its length
console.log("Length of array:", fruits.length); 
console.log("Fruits:", fruits); 

// Accessing array elements using index values
console.log(fruits[2]); 
console.log(fruits[4]); 
console.log(fruits[0]); 

// set timeout
setTimeout(function(){
    console.log("Hllo!..Welcome to access");
},3000);


// push and shift
{
var colour=['Red','Green','white','brown'];
// adding element in array
colour.push('blue')
console.log(colour);
colour.shift()
}
// unshift and pop
{
var fruits = ['Apple', 'Banana', 'Cherry'];
fruits.unshift('Mango');
console.log(fruits); 
fruits.pop();
console.log(fruits);
}

// switch case
let transportMode = 'train';

switch (transportMode) {
    case 'car':
        console.log('Traveling by road.');
        break;
    case 'train':
        console.log('Traveling by rail.');
        break;
    case 'airplane':
        console.log('Traveling by air.');
        break;
    case 'boat':
        console.log('Traveling by water.');
        break;
    default:
        console.log('Unknown transport mode.');
        break;
}