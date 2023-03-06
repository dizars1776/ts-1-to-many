//console.log('log')

/*
 1 Write a TypeScript function that takes in two numbers and returns their sum. Use basic type definitions to ensure that the input arguments are numbers and the output is a number.
 2. Write a TypeScript function that takes in two strings and returns their concatenation.
 3. Write a TypeScript function that takes in a boolean and a string and returns the string if the boolean is true, and an empty string otherwise.
*/

function check(bool: boolean, str: string): string {
  return bool ? str : ''
}

//console.log(check(true, 'James'))

function sum(a: number, b: number): number {
  return a + b
}

//console.log(sum(12,68))

function con(c: string, d: string): string {
  return c + d
}

//console.log(con('sasd','dfgs'))

/*
1. Create a TypeScript interface for a Person object that contains the following properties: name (string), age (number), email (string), isAdmin (boolean). 
Then, create a function that takes in a user object and returns a string representation of the user's information.
2. Create a TypeScript interface for a Product object that contains the following properties: `name` (string), `price` (number), `description` (string), `inStock` (boolean).
3. Create a TypeScript interface for a Animal object that contains the following properties: `name` (string), `species` (string), `age` (number), `diet` (string).

*/

interface Person {
  name: string
  age: number
  email: string
  isAdmin: boolean
}

function representation(user: Person): string {
  return `Name: ${user.name} \nAge: ${user.age} \nEmail: ${user.email} \nAdmin: ${user.isAdmin}\n`
}

console.log(
  representation({
    name: 'Nikos',
    age: 12,
    email: 'nikos@mail.com',
    isAdmin: false,
  })
)

interface Product {
  name: string
  price: number
  description: string
  inStock: boolean
}

function rep(prod: Product): string {
  return `Name:${prod.name} \n Price:${prod.price} \n Description:${prod.description} \n InStock:${prod.inStock}`
}

let product: Product = {
  // let/const variable_name: nameType = value
  name: 'Andrei',
  price: 9999,
  description: 'good',
  inStock: false,
}

console.log(rep(product))

interface Animal {
  name: string
  species: string
  age: number
  diet: string
}

function AnimalDisplay(info: Animal): string {
  return `Name: ${info.name} Species: ${info.species} Age: ${info.age} Diet: ${info.diet} `
}

let animal: Animal = {
  name: 'Mike',
  species: 'dog',
  age: 10,
  diet: 'yes',
}
console.log(AnimalDisplay(animal))
