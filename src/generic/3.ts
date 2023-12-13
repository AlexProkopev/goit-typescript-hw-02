/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type anyObject = Record<string,any>
function merge <T extends anyObject>(objA:T, objB:T):T {
  return Object.assign(objA, objB);
}
const objC:anyObject = { name: 'name', color: null }
const objD:anyObject = { position: 1, weight: 2 }

const myMerge = merge(objC,objD);
console.log(myMerge);

export {}


