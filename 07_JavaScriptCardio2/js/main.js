'use strict';
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

const some19 = people.some((person) => 2020 - person.year >= 19);
console.log('is at least one person 19 or older? ' + some19);

const every19 = people.every((person) => 2020 - person.year >= 19);
console.log('is everyone 19 or older? ' + every19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findId = comments.find((comment) => comment.id === 823423);

console.log(findId.text);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const idToDelete = comments.findIndex((comment) => comment.id === 823423);

const newComments = comments.slice(0, idToDelete).concat(comments.slice(idToDelete + 1));

console.log(newComments);
