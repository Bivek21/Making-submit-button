// console.log("Hello world");
// console.log(`Hello Bivek are you learning javascript`);

// /*this is a comment*/
// document.getElementById("myH1").textContent = `I love Pizza`;
// document.getElementById("myP").textContent = `I like playing football`;
// window.alert(`Hello`);

// /* variable*/
// let x; /*declaration*/

// x = 100; /*assignment*/
// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(gpa);

// console.log(`You are ${age} Years old.`);
// console.log(`The price is ${price} which is expensive`);
// console.log(`Your gpa is ${gpa} which means you are almost good`);

// let X;
// // declaration

// let x = 100;
// // assigned
// console.log(x);

// strings is a series of character

// let firstNAme = "bivek";
// console.log(typeof firstNAme);

// console.log(`Your name is ${firstNAme} and you are from Simara. `);

// let favouriteFood = "Noodles";
// let email = "Baralbibek1234@gmail.com";
// console.log(`You like ${favouriteFood}.`);
// console.log(`your email Id is ${email}.`);

// // Boolean are true or false
// let online = true;
// let forSale = true;
// console.log(typeof online);
// console.log(`Bro is online:${online}`);
// console.log(`is this car for sale:${forSale}`);

// let isStudent = true;
// console.log(`Enrolled:${isStudent}`);

// variable=  A container that stores a value behave as if it were the value it contains

// let fullName = "Bivek Baral";
// let age = 25;
// let student = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old.`;
// document.getElementById("p3").textContent = `Are you a student : ${student}`;

// airthmetic operator

// let student = 31;
// student = student + 1;
// student = student * 2;
// student = student / 2;
// student = student ** 2;
// let extraStudent = student % 3;
// console.log(extraStudent);

// // student++;
// student--;
// // student += 1;
// console.log(student);

// let result = 1 + 2 * 3 + 4 ** 2;
// result ** 2;

// console.log(result);

// how to accept user input
// easy way = window prompt
// professional way= Html textbox

// let useName;
// useName = window.prompt("What is your user name");
// console.log(useName);
let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
};
