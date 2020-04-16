//Scope

function sayHello(){
    var greeting = "Hello";
    return greeting;
}
// console.log(greeting)
var hello = sayHello();
console.log(hello);


let isTrustworthy = true;
let secret;

if(isTrustworthy === true){
    secret = "I've had way too much coffee this morning.";
}

// secret = "I woke up like thirty minutes ago."
// Does not throw error because it's like I'm declaring a whole new variable; const secret doesn't really exist outside the scop of that if statement
console.log("is it trustworthy?", isTrustworthy);
console.log(secret);

// let and const will allow more control over variables; cannot reinitailize them


// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
let sentenceBeginning = "The symtoms of Covid-19 are"
const symptoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
const mySymptoms = [];

// This loop will go through each symptom, concatenate it to our sentence, and push it into a new array of our own personal symptoms
for(let i = 0; i < symptoms.length; i++){
    sentenceBeginning += ` ${symptoms[i]},`
    mySymptoms.push(symptoms[i]);
}
// console.log(sentenceBeginning);
// console.log(mySymptoms);

// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors


//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file
// let taco;
function tacoTruck(shellType, toppings){
    const taco = `A ${shellType} taco with ${toppings}`;
    return taco;
}

// const myOrder = tacoTruck("soft", "cheese");

console.log(tacoTruck("soft", "cheese"));
// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages

let shellType = "soft"
let toppings = "beans and cheese"

console.log(`A ${shellType} taco with ${toppings}`)

shellType = "crunchy"
toppings = "fish"
console.log(`A ${shellType} taco with ${toppings}`)

//Build sentence about tacos
function buildTacoSentence(shellType, toppings){
    const tacoSentence = `A ${shellType} taco with ${toppings}`
    return tacoSentence;
}

const fishTacoSentence = buildTacoSentence("crunchy", "fish");

//convert sentence to uppercase
function convertToScreaming(phrase){
    return `${phrase.toUpperCase()}!!!!!!!!!!!!!!!!!!!!!`;
}

const screamFishTaco = convertToScreaming(fishTacoSentence)

//Print sentence to console
function printPhraseToConsole(phrase){
    console.log(phrase)
}

printPhraseToConsole(screamFishTaco)

// Write a function that accepts two parameters, first and last name. The function should return a greeting to that person using their full name. Then log the greeting to the console outside the function

function greeting(firstName, lastName){
    const greeting = `Hello, ${firstName} ${lastName}!`;
    return greeting;
}

console.log(greeting("Swathi", "Mukkamala"));

//Practice: ChickenMonkey
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        if(currentNumber % 7 === 0){
            console.log("ChickenMonkey"); //Multiples of 5 and 7
        }
        else{
            console.log("Chicken") // Multiples of 5
        }
    }
    else if (currentNumber % 7 === 0){
        console.log("Monkey"); //Multiples of 7
    }
    else{
        console.log(currentNumber)
    }
}

//Practice: Take a Number- Battle of the Bands
let bandNumber = 1

const takeNumber = function (bandName) {
    const receipt = `${bandNumber}. ${bandName}`;
    bandNumber++;
    return receipt;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


//Practice: Cookout
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i++){
    grill(foods[i]);
    if (foods[i].cooked === true){
        console.log(`${foods[i].name} is now cooked.`)
    }
}
// console.log(cookedFood);

//Practice: Overly Excited + Some words are more exciting than others + Function Arguments + Challenge: Multiple Punctuation
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punctuation, iteration) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    //Challenge: adding as many punctuation marks as specified by the user
    let string = "";
    while (punctuation !== undefined && iteration > 0){
        string += punctuation;
        iteration --;
        // console.log(string)
    }

    for (let i = 0; i < theWordArray.length; i++) {

        if (i % 3 === 0 && i !== 0){
            buildMeUp += `${string} ${theWordArray[i]}`;
        }
        
        else{
            // Concatenate the new word onto buildMeUp
            buildMeUp += ` ${theWordArray[i]}`;
        }

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "*", 2);

// //Challenge: ReWrite addExcitement with Arrow Functions
// "use strict";

// let addExcitement = (theWordArray, punctuation, iteration) => {
//     let buildMeUp = ""

//     let string = "";
//     while (punctuation !== undefined && iteration > 0){
//         string += punctuation;
//         iteration --;
//         console.log(string)
//     }

//     for (let i = 0; i < theWordArray.length; i++) {

//         if (i % 3 === 0 && i !== 0){
//             buildMeUp += `${string} ${theWordArray[i]}`;
//         }
        
//         else{
//             buildMeUp += ` ${theWordArray[i]}`;
//         }
//         console.log(buildMeUp);
//     }
//     return buildMeUp;
//     }

// console.log(addExcitement(sentence, "*", 6))
