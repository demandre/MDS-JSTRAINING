"use strict";

//Exo 1

// My Digital School Forever

//Exo 2

/*
My Digital School forever 
every day
*/

//Exo 3

var strVar = '42';
var numbVar = 42;
var floatVar = 42.0;
var boolVar = true;
var arrVar = ['42'];
var datVar = new Date(42);
var objVar = {};
var undefinedVar;
var nullVar = null;

//Exo 4

var my42count = "quarante-deux";
console.log(my42count.length);

//Exo 5

//var existing = 2;
var areYouExisting = (existing || 42);
console.log(areYouExisting);

//Exo 6

var myArray42 = ['q','u','a','r','a','n','t','e','-','d','e','u','x'];

//Exo 7

var myArray42Len = myArray42.length;
console.log(myArray42Len);

//Exo 8

var fullSentence = myArray42.join('') + "La grande réponse sur la vie, l’univers et le reste !";
console.log(fullSentence);

//Exo 9
 
var rand = (Math.floor(Math.random()*42 + 1) == 42); 
console.log(rand);

//Exo 10

var my42Type;
console.log(typeof my42Type);
my42Type = '42';
console.log(typeof my42Type);
my42Type = 42;
console.log(typeof my42Type);
my42Type = true;
console.log(typeof my42Type);
my42Type = function my42function(){};
console.log(typeof my42Type);
my42Type = Symbol(42);
console.log(typeof my42Type);

//Exo 11

var compute42 = (21*2).toString();

//Exo 12

var multiple42 = 42424242;
var multiple42 = multiple42.toString().replace(/42/g,'quarante-deux');
console.log(multiple42);

//Exo 13

var a = 24;
var b = 42;

var c = a;
a = b;
b = c;

console.log(a);
console.log(b);

