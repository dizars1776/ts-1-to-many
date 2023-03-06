//console.log('log')
/*
 1 Write a TypeScript function that takes in two numbers and returns their sum. Use basic type definitions to ensure that the input arguments are numbers and the output is a number.
 2. Write a TypeScript function that takes in two strings and returns their concatenation.
 3. Write a TypeScript function that takes in a boolean and a string and returns the string if the boolean is true, and an empty string otherwise.
*/
function check(bool, str) {
    return bool ? str : '';
}
//console.log(check(true, 'James'))
function sum(a, b) {
    return a + b;
}
//console.log(sum(12,68))
function con(c, d) {
    return c + d;
}
function representation(user) {
    return "Name: ".concat(user.name, " \nAge: ").concat(user.age, " \nEmail: ").concat(user.email, " \nAdmin: ").concat(user.isAdmin, "\n");
}
console.log(representation({
    name: 'Nikos',
    age: 12,
    email: 'nikos@mail.com',
    isAdmin: false
}));
function rep(prod) {
    return "Name:".concat(prod.name, " \n Price:").concat(prod.price, " \n Description:").concat(prod.description, " \n InStock:").concat(prod.inStock);
}
var product = {
    name: 'Andrei',
    price: 9999,
    description: 'good',
    inStock: false
};
console.log(rep(product));
function AnimalDisplay(info) {
    return "Name: ".concat(info.name, " Species: ").concat(info.species, " Age: ").concat(info.age, " Diet: ").concat(info.diet, " ");
}
var animal = {
    name: 'Mike',
    species: 'dog',
    age: 10,
    diet: 'yes'
};
console.log(AnimalDisplay(animal));
