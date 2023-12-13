/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair <T,U> {
  key:T;
  value:U;
}

function createObject<T,U>( key:T,value:U): KeyValuePair<T,U> {
  return {
    key,
    value
  }
}

const myObject = createObject<string, number>('id', 1)
console.log('myObject: ', myObject);


export {};