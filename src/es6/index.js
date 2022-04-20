function newFunction(name,age,country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = (name,age,country);
    console.log(name,age,country);

    
}

//es6
function newFunction2 (name = 'oscar', age = 32, country= "MX"){
    console.log(name,age,country);

}

newFunction2();
newFunction2('Ricardo','23','CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = " Lorem ipsum wqeewq qewwqe weqeqw \n" 
+ "otra frase épica que necesitamos."

//es6
let lorem2 = `otra frase epica q necesitamos
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

let { name } = person;

console.log(name);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global var";

}
{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

let nombre = 'oscar';
let age = 32;
//es5
obj = { nombre: nombre, age: age};
//es6
obj2 = {nombre, age};
console.log(obj2);

const names = [
    {name:'Oscar', age:32},
    {name: 'Yesica', age:27}

]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));


const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
            
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(2,2));

import { hello } from './module';

hello();

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

