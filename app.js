let fullName = "Alex Syrett";

const numberOfStates = 50;

// calculates the sum of 5 + 4 and stores in the variable.
let sum = 5 + 4;
console.log(sum);

function sayHello() {
    console.log('Hello World!');
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegetablesList = ['Broccoli', 'Tomato', 'Spinich', 'Onion', 'Carrot', 'Celery', 'Green Beans', 'Corn', "lettuce"];

for (let i = 0; i < vegetablesList.length; i++) {
    console.log(vegetablesList[i]);
}

let pet = {
    name: 'Wrigley', 
    breed: 'Labrador Retriever'
};
console.log(pet);

let people = [
    {name: 'John', age: 30},
    {name: 'Alice', age: 25},
    {name: 'George', age: 18},
    {name: 'Rebecca', age: 17},
]
function checkAge(name, age) {
    if (age < 21)
    console.log("sorry" + name + "You aren't old enough to view this page!");
}

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(word) {
    return word.length
} 

let lengthOfHelloWorld = getLength("Hello World");

if (lengthOfHelloWorld % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}





