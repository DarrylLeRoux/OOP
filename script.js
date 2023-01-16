'use strict';

// Constructor function
////////////////////////
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const Jonas = new Person('Jonas', 1991);
console.log(Jonas);

// 1. A new empty object {} is created
// 2. a function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Matilda = new Person('Matilda', 2017);
const Jack = new Person('Jack', 1998);

console.log(Matilda);
console.log(Jack);

console.log(Jonas instanceof Person); // true

// Prototypes
////////////////////////
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

// calcAge() is now available on the Person prototype, can can be called when needed, and is not automatically applied to each instance

Jonas.calcAge();
// if we try and call a method on an Object that doesn't exist in the Object, it will then look at the prototype to see if it is there
// Jonas =
// name: Jonas
// birthYear: 1990
// __proto__: Person.prototype
// calcAge() exists on the Person prototype, and therefore has access to it

// __proto__ points to the Person's prototype
console.log(Jonas.__proto__ === Person.prototype);
console.log(Jonas.__proto__); // will have all the methods on the Person prototype
console.log(Jonas.__proto__.__proto__); // prototype chain can then go as far as Object

const arr = [1, 3, 45, 5, 5, 6, 6, 6, 6, 6];
console.log(arr.__proto__); //map, find, filter, reduce etc.
console.log(arr.__proto__ === Array.prototype); //true
