// // // // // let, var, const
// // // // // let allows value to change

// // // // // console.log(name); // print to the console, prints anything in the paranthesis

// // // // console.log("hello world");

// // // // // console.log(1 + 1);
// // // // // // string is a sequence of characters
// // // // // // 3 days to declare a string, "", '', ``

// // // // const name = "pizza";
// // // // const topping = "pineapple";
// // // // console.log(name);

// // // // /* adding two strings;
// // // // concactenation */
// // // // console.log(name, topping);

// // // // // template literals, turn/pull everything into a string, ability to show into your HTML document

// // // // // console.log(`${name} ${topping}`);

// // // // // console.log("string" + 32);
// // // // // //  string plus integer will = a string.

// // // // // console.log("32" + "1" + "str");

// // // // // // integer

// // // // // console.log(1.5 + 0.3);

// // // // // /* undefnd value false value. anyting that has a value in it, is TRUE */

// // // // // // booleans
// // // // // // if value is false, undefined, null 0 will be false statements

// // // // // // const num = undefined;
// // // // // // console.log(Boolean(num));

// // // // // // let prompt1 = prompt("what is your name");
// // // // // // let whereDidHeGo = prompt("where did he go?");
// // // // // // console.log(`${prompt1} went to the ${whereDidHeGo}`);

// // // // // // alert(`${prompt1} went to the ${whereDidHeGo}`);

// // // // // // promt user for their name, age and hobby & store them & create an alert personalized introduction message
// // // // // // hi my name is variablename, variableage, and i like too variablehobby

// // // // // let variableName = prompt("what is your name?");
// // // // // let variableAge = prompt("what is your age?");
// // // // // let variableHobby = prompt("what is your favorite hobby?");

// // // // // alert(
// // // // //   `Hi my name is ${variableName} and my age is ${variableAge} and my favorite hobby is ${variableHobby}`
// // // // // );

// // // // // CONDITIONALS //////////////////////

// // // // // truthy values
// // // // //  undefined, null , NaN, 0

// // // // // let x = 1;
// // // // // console.log(Boolean(x));

// // // // // CONDITIONAL OPERATORS
// // // // // === ; strict equals; datatype equals the datatype 1 === 1
// // // // // ==; loose equals; 1 == '1' they equal the same thing regardless of datatype
// // // // // loose equals checks if value is the same, regardles of datatype
// // // // // different types of datatype: string, number, boolean,
// // // // // 1 !== 2; true
// // // // // <, >, !== (not equals syntax), <=, >=
// // // // // more than or equal to
// // // // // 1 <= 1
// // // // // 'collin

// // // // //if statement

// // // // // if (this is true) {then run this}

// // // // // if (condition){action}

// // // // // if('collin' === 'collin') {
// // // // //     console.log("hello world")
// // // // // }

// // // // // = ; assignment operator
// // // // // == ;loose equals comparing two values let x = "0";
// // // // // ===; exactly equal

// // // // // logical operators ; can be used in sae if statement

// // // // // || && ??

// // // // // || OR
// // // // // && AND  checks to see if all conditions are true
// // // // // ?? NULLISH

// // // // let x = 0;

// // // // let y = 1;

// // // // // does x equal 0 and y equal 1

// // // // if (x == 0 && y === 1) {
// // // //   console.group("hello world");
// // // // }

// // // // // OR OPERATOR

// // // // let questComplete = false;
// // // // let questComplete2 = false;
// // // // let slimesDefeated = 0;

// // // // if ((slimesDefeated = 10)) {
// // // //   questComplete = true;
// // // // }

// // // // // or  if thirst statement is false, will move onto next statement

// // // // let i = 0;

// // // // let k = 1;

// // // // // if (i === 1 || k === 1) {
// // // // //   console.log("hello world");

// // // // // if this happens or this

// // // // // ELSE; if the the statement is false

// // // // // let v = 10;
// // // // // let u = 8;

// // // // // let login = false;

// // // // // if (v === 9) {
// // // // //   console.log("its a hollow world");
// // // // // } else {
// // // // //   console.log("goodbye world");
// // // // // }

// // // // // if (login === true) {
// // // // //   //redirect to page
// // // // // } else {
// // // // //   alert("account does not exist");
// // // // // }

// // // // // // else if
// // // // // /* will run if conditions before it are false and specifies a new condtion */

// // // // // let q = 3;
// // // // // if (q === 1) {
// // // // //   console.log("hello world");
// // // // // } else if (q === 0) {
// // // // //   console.log("goodbye world");
// // // // // } else {
// // // // //   console.log("something");
// // // // // }
// // // // // // will default to last 'something' bc statement is true

// // // // // let q = 0;
// // // // // if (q === 1) {
// // // // //   console.log("hello world");
// // // // // } else if (q === 0) {
// // // // //   console.log("goodbye world");
// // // // // }
// // // // // // will default to goodbye world

// // // // // let user = "guest";

// // // // // if (user === "admin") {
// // // // //   //redirect to admi page
// // // // // } else if (user === "user") {
// // // // //   // redirect to user page
// // // // // } else {
// // // // //   alert("account not found");
// // // // // }

// // // // let userName = prompt("Enter your username");

// // // // if (userName === "collin123") {
// // // //   alert("logged in!");
// // // // } else if (userName === "lucy321") {
// // // //   alert("logged in!");
// // // // } else {
// // // //   alert("no account found");
// // // // }

// // // if (userName === "collin123" || userName2 === "audry123") {
// // // //   alert("login in!");
// // // // } else {
// // // //   alert("no account found");
// // // // }

// // // // math.floor rounds it down
// // // //math.random gives you random

// // // let randomNumber = Math.floor(Math.random() * 4);
// // // console.log(randomNumber);

// // // let arr = [
// // //   "liv",
// // //   "kamar",
// // //   "derrick",
// // //   "jimmy",
// // //   "lucy",
// // //   "louis",
// // //   "deisy",
// // //   "shadi",
// // //   "edwin",
// // // ];

// // // console.log(arr[randomNumber]);

// // // if (arr[randomNumber] === "liv") {
// // //   console.log("hello world");
// // // } else if (arr[randomNumber] === "kamar") {
// // //   console.log("whats poppin");
// // // } else {
// // //   console.log("tech your wrong");
// // // }

// // // let ar = ["shadi", "lucy", "kite"];

// // // if (ar[0] === "shadi") {
// // //   console.log("shadi");
// // // } else if (ar[1] === "lucy") {
// // //   console.log("lucy");
// // // } else {
// // //   console.log("everyone else");
// // // }

// // // CHALLENGE: GUESS THE NUMBER

// // //  The program generates a random number between 1 and 10.
// // let randomNumber = Math.floor(Math.random() * 11);
// // console.log(randomNumber);
// // //// The user is prompted to guess the number.

// // let userQuestion = prompt("what number are you guessing?");

// // // If the user's guess matches the generated number, an alert is shown with a success message.
// // if (userQuestion == randomNumber) {
// //   alert("correct!");
// // } else {
// //   alert("incorrect");
// // }

// // // If the user's guess is incorrect, an alert is shown with a failure message.

// // // LOOOPS
// // let myName = "Collin";
// // // data type of variable myName is a string
// // console.log(myName);
// // console.log(typeof myName);

// // //if we want to know what tpe of datatype

// // /// conditionals
// // if (myName === "Collin") {
// //   console.log(`Hello ${myName}`);
// // } else {
// //   console.log(false);
// // }
// // // for
// // // i is now zero, and if i is less than 10 console log it, will only result in less than 10.
// // // i++ will continue to add a '1'
// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// // // if you write a for loop wrong, it can run infinetly, if you're on a app like vs code, it's
// // //going to ruin/crash the machine etc infinte loops slow down machine

// // /// arrows and methods
// // //// forms to keep data, push this name or data to this array
// // let team = ["lucycan", "collin", "mark", "cortez"];
// // console.log(team);
// // console.log(team.length);
// // ///push forms to keep data, push this name or data to this array
// // console.log(team.push("derrick", "john"));
// // console.log(team);
// // ///pop
// // console.log(team.pop());
// // console.log(team);

// // ///join
// // console.log(team.join("I"));
// // // or console.log(team.join("   and    "))
// //grabs every index in your array and groups; changes commas into "I"'s or anything in the input

// //slice
// // get rid of anything b4 indez 0 get rid of anything from indez 3;; inclusive/exclusive. 0 is inclusive and 3 is exclusive
// // getting rid of everyting before ("1, 3")
// // // getting rid of everything after "3"
// // // team.slice(1, 3); will equal to c
// // console.log(team);
// // console.log(team.slice(1, 3));

// // //split returns a new array
// // let team1 = "john, mike,kierstin,lucy";
// // console.log(team1);
// // let teamSplit = team1.split(" ,");
// // console.log(teamSplit);

// // // declared it into a variable and split it into .split (" ,") and returns it as an array

// // // looping thru an array

// // /* dont want to hardcode team is < 5; that is hardcoding; length could change */
// // console.log(team);
// // for (let i = 0; i < team.length; i++) {
// //   console.log(i);
// //   console.log(team[3]);
// // }
// // for (let i = 0; i < team.length; i++) {
// //   console.log(team[i]);
// // }

// // let roles = [
// //   "tech manager",
// //   "techfello",
// //   "placement",
// //   "program manager",
// //   "intern",
// // ];

// // console.log(roles);
// // console.log(roles.length);

// // for (let i = 0; i < roles.length; i++) {
// //   console.log(i);
// //   //console.log(roles[i]);
// //   console.log(`Hello my name is ${team[i]} and I  a ${roles[i]}`);
// // }

// // /// same loop, "hi my name is Lucycan and I am the tech manager"

// // //console.log(`hello ${team[i]}`)
// // // return will be --> "hello lucycan, hello collin..."

// // //infinte loop ex:
// // //for (let i = 0; team.lengths
// // //   console.log(i);
// // // // }

// // // // CHALLENGE

// // // // prompt goes up, push values
// // // // promt goes up, push team roles
// // // // console log it
// // // // push through into a blank array
// // // // run 4 loop that runs that array

// // // /// using only what we have learned this far, working with
// // // /// enter your teas names and roles into your prompt(s)
// // // /// populate those values in an array[s]
// // // /// write a for loop that logs: " hello my name is <name and I am a <role>"
// // // /// you must get a log for every team member

// // let team2 = prompt("Enter your team names."); // audrey, edwin, alee
// // console.log(team2);

// // let roles2 = prompt("Enter your team roles."); // manager, bizz, analyst
// // console.log(roles2);

// // // pull variable "team2 into new variable TeamSplit with action .split"
// // //this will make the prompted information turn into an array.
// // let teamSplit = team2.split(",");
// // console.log(teamSplit);

// // // pull variable roles2 into new variable teamRoles with action . split.
// // // this will make the prompted information turn into an array.
// // let teamRoles = roles2.split(",");
// // console.log(teamRoles);

// // for (i = 0; i < teamSplit.length; i++) {
// //   console.log(`hello my name is ${teamSplit[i]} and i am a ${teamRoles[i]} `);
// // }

// // // for (i = 0; i < roles2.length; i++) {
// // //   console.log(roles2[i]);
// // //   console.log(`Hello my name is ${team2[i]} and I  a ${roles2[i]}`);

// //initializer
// //condition
// //iterator

// // const arr = [1, 2, 3];
// // console.log(arr[2]); // 3

// // //////////initializer///////condition///////iterator
// // for (let initializer = 0; initializer < arr.length; initializer++) {
// //   console.log(arr[initializer]); // 1 3x bc of arr.length
// // }

// // /////////////////////FUNCTIONS

// // resusable piece of code
// //ANCHOR - JAVASCRIPT FUNCTIONS

// // syntax for function

// function functionName(name) {
//   // console.log(name);
//   return name;
// }

// // TYPE THE FUNCTION NAME FOLLOWED BY PARANTHESIS
// functionName("collin"); //  IN THE PARANTHESIS IS THE ARGUMENT

// // RETURN STATEMENT

// const name = functionName("vince");

// let array2 = [1, 2, 3, 4, 5, 6];

// let array3 = [1, 2, 3, 4, 5, 6];
// let array4 = [1, 2, 3, 4, 5, 6];

// function iterateThroughArray(arr) {
//   for (let initializer = 0; initializer < arr.length; initializer++) {
//     console.log(arr[initializer]);
//   }
// }
// iterateThroughArray(array3);

// // variables we've declared inside paranthesis
// // want to get the sum of both numbers and console log
// //num1 num2 are parameters
// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(1, 3); // 4

// //functions dont need parameters unless they need something to change

// function helloWorld() {
//   console.group("hello world");
// }
// helloWorld();
// // you only want parameters when you need something that needs to change

// function div(num1, num2) {
//   console.log(num1 / num2);
// }
// sum(1, 3);

// //you can declare ufnction as avariable
// // declaring the functions name in the variable

// // functions name is the variable names
// const function1 = function () {};

// // ARROW FUNCTION
// const function2 = () => {};

// let array10 = [1, 2, 3, 4, 5];

// // arr is placeholder for any arr we put in
// const function21 = function (arr) {
//   for (initializer = 0; initializer < arr.length; initializer++) {
//     console.log(arr[initializer]);
//   }
// };
// // return makes it equal to the value

// let array100 = [1, 2, 3, 4, 5];
// function21(array100);

// // LET array 10 should be ABOVE FUNCTION FOR IT TO WORK!!!!!!!!!!!!

// // ///real life example

// // let users = ['collin', 'vince', 'haylee']

// // userinput = prompt('what is your username')

// // //if(userinput vlahblah)

// // 'eventlistener', () => {

// // }

// function loop() {
//   console.log("hey");
// }
// loop();

// // BLOCKSCOPE WHEN YOU DECLARE A FUNCTION INSID E A VARIABLE
// // blockscope is when its in within the curly brackets

// // global scope is everything outside curly brackets
// function blockScope() {
//   let x = 0; // you CANT access in GLOBAL SCOPE
//   console.log(x); // you CAN access and its called BLOCKSCOPE
// }
// //console.log(x) // global access
// // when youre declaring a variable within a function

/// CHALLENGE #3
///CHALLENGE
// let team = ["Lucycan", "Collin", "Mark", "Cortez"]; ///this array needs to be in block scope not global scope
///create a function that passes another name as an argument to the function parameter
/// the function adds the name that you passed to the array
/// return the array
/// expected output: ["Lucycan", "Collin", "Mark", "Cortez", "Blanca"]

// looopingggg through an array
// function iterateThroughArrayNames(arr) {
//   for (let initializer = 0; initializer < arr.length; initializer++) {
//     console.log(arr[initializer]);
//     return X
//   }
// }
// iterateThroughArrayNames(team);

// let team = ["Lucycan", "Collin", "Mark", "Cortez"];

// function teamNames(team) {
//   for (let initializer = 0; initializer < team.length; initializer++) {
//     console.log(team);
//     return teamNames;
//   }
// }

// function addToArray(name) {
//   let team = ["Lucycan", "Collin", "Mark", "Cortez"];

//   team.push(name);
//   return team;
// }

// console.log(addToArray("audrey"));

/* 
DOM MANIUPLATION
document object model
data represationt of entire HTML
represented in DOM tree
manipulating the elemtnts in the html file using javascript



*/

// GRABBING HTML ELEMENT BY ID W JAVASCRIPT
console.log(document);

const input = document.getElementById("calendar");

console.log(input);

// GRABBING HTML ELEMENT BY CLASS W JACASCRIPT

const submit = document.getElementsByClassName("submit");

console.log(submit[0]);
// GRABBING HTML ELEMENTT BY TAG
//doesnt have an id or a tag
const h1 = document.querySelector("h1");

console.log(h1);

// event listner
// something that happens on a webpage
// click event, resize, change, etc. WE WANT TO LISTEN TO THESE EVENTS

//functions are yellow ('') are the parameter
submit[0].addEventListener("click", function () {
  console.log("hello world");
  // h1.textContent = "goodbye world"; // everything between ('')

  h1.textContent = `You have reserved for ${input.value}`; // query selector pulling information
});
