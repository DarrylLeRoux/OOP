'use strict';

// Constructor function

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
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
