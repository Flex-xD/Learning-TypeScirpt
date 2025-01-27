// ! BASIC VARIABLES TYPES
let num: number;
let str: string;
let bool: boolean;
let nu: null;
let undef: undefined;
let voi: void; // ? This one is used when a function does something but dosen't return anything 

// ! ARRAYS and TUPLES
const arr: number[] = [];
arr.push(1);

const arr1: [string | number][] = [[2], ["Aman"], ["I am batman"], [3]]
console.log(arr1[0][0]);

const arr2: (string | number)[] = [1, 2, 3, "hello"]
console.log(arr2[0]);

const random: [number, number[]][] = [
    [1, [1, 2]],
    [1, [1, 33, 4]]
]

const coords: [(number | string)[], (null | boolean)[]] = [
    [1, 2, "Good"],
    [null, true, false]
];

// ! LITERALS : These are like the instances of the basic variables types
let directions: "north" | "south" | "east" | "west"; // ? Representation of Literals
directions = "south";
if (directions === "south") {
    console.log("You have to move east now")
} else {
    console.log("It is not in the south direction !")
}

// ! Enum (Enumeration)
enum numbers {
    small = 100,
    medium = 200,
    large = 300
}

enum statusCode {
    successCode = 200,
    somethingCreated = 201,
    clientError = 400,
    unAuthorized = 401,
    unexpectedError = 500
}

let value: number;
value = 200;
value === numbers.medium ? console.log("Value is", numbers.medium) : console.log("Value is not", numbers.medium);


// ! ANY , UNKNOWN and TYPECASTS
// ? Assigning any type to a variable will stop the type checking of the typescript 
let x: any;
x = 3;
x = "hello";
x = true;

const process = (input: any): void => {
    console.log("processng", input);
}
// * This can be string , number , file etc
process(2); // WORKS
process("parameter"); // WORKS
process(true); // WORKS

// ! UNKNOWN 
const processing = (input: unknown): void => {
    if (typeof input == "number") {
        console.log(`Processing ${input}`);
    } else if (typeof input == "string") {
        console.log(`Processing ${input}`);
    } else if (input instanceof Blob) {
        console.log(`Processing ${input}`);
    }
}

processing(1) // ? Correctly Identified as Number 
processing("Hello") // ? Correctly Identified as String 
processing(new Blob()) // ? Correctly Identified as Blob 

// ! Optional chaining and Bang
const names = [{ name: "aman" }, { name: "adi" }, { name: "adi" }];
const el = names.pop()?.name // ? Here it will not throw an error and before checking for the name it will check whether it is undefined of not 
const moreNames = [[{ name: "Negi" }]];
const moreEl = moreNames.pop()?.pop()?.name

const bangEl = names.pop()!.name; // ? Here it is more like forwarding it toward any other type rather than undefined
const bandMoreEl = moreNames.pop()!.pop()!.name;

// ! Basic functions types 
const add = (a: number, b: number): number | string => {
    if (a === 0) {
        return "Invalid";
    }
    return a + b;
}

add(1, 2); // ? Here by hovering on to the function , I will get to know it's format and while working in large databases this will help me write code faster

const makeName = (
    firstName: string,
    lastName: string,
    middleName?: string): string => { // * Here by using "?" the middlename parameter is optional and will not throw any error if not provided
    if (!middleName) {
        return firstName + " " + lastName
    }
    return firstName + " " + middleName + " " + lastName
}

const callFunc = (
    fun: (f: string, l: string, m?: string) => string,
    param1: string,
    param2: string): string => {
    return fun(param1, param2);
}

callFunc(makeName, "Aman", "Bisht");

function mul(x: number, y: number): number {
    return x * y
}

function div(x: number, y: number): number {
    return x / y
}


// ! A bit complicated one 
function applyFunc(
    func: ((x: number, y: number) => number)[],
    values: [number, number][]
): number[] {
    const results = [] as number[];
    for (let i = 0; i < func.length; i++) {
        const args = values[i];
        const result = func[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}

applyFunc([mul, div], [[1, 2], [4, 2]]);

// ! Advanced function types
function calculateSum(...numbers: number[]): number {
    let value = 0;
    for (let i = 0; i < numbers.length; i++) {
        value += numbers[i];
    }
    return value;
}

// function getItemsLength (name:string):number;
// function getItemsLength (names:string[]):string;
// const getItemsLength = (nameOrNames:unknown) :unknown => {
//     if (typeof nameOrNames === "string") {
//         return nameOrNames.length;  // ? It is giving me error for some reason !
//     } else if (Array.isArray(nameOrNames)) {
//         return "It is an array"
//     }
//     return 0;
// } 

// getItemsLength("hello")


// ! INTERFACES
interface Person {
    name: string,
    age: number,
    height: number,
    skills: string[],
    hobbies?: string[]
}

interface employment extends Person { // ? The properties of the Person interface will be assigned to the employment interface !
    haveExperience: [boolean, number];
    watchesAnime?: boolean,
    wantRemoteJob: boolean
}

const person: employment = {
    name: "Aman Bisht",
    age: 17,
    height: 152,
    skills: ["Html", "CSS", "JavaScript", "TypeScript", "React", "MongoDB", "Express", "Node", "TailwindCSS", "ShadCN"],
    haveExperience: [true, 5],
    wantRemoteJob: true
}

const getPerson = (person: Person): employment => {
    return {
        name: "Aman Bisht",
        age: 17,
        height: 152,
        skills: ["Html", "CSS", "JavaScript", "TypeScript", "React", "MongoDB", "Express", "Node", "TailwindCSS", "ShadCN"],
        haveExperience: [true, 5],
        wantRemoteJob: true
    }
}

// ! CLASSES
class guy {
    protected name: string;
    constructor(name: string) {
        this.name = name;
        this.greet(); // ? Here I can use the greet even though it is private because as it being used inside the class where greet is initialized , I would't be able to use it somewhere else outside here
    }
    private greet() {
        console.log(`Hello , My Name is ${this.name}`);
    }
    getName() {
        if (this.name.length < 2) return "";
        return this.name;
    }
    setName(name: string) {
        if (name.length < 5) return this.name = name;
    }
}


class anotherGuy extends guy {
    greetMe() {
        console.log(this.name); // ? Here I can use the this.name as name is protected in the guy class , if it would have been private I would'nt have been able to use it !
    }
}

const p1 = new guy("Tim");
p1.getName();

// ! Abstract classes
// ? These classes are not used for instances and are only used for the extending other classes !
abstract class Animal {
    abstract makeSound(duration: number): void; // ? If a function is abstract it must be used or implemented !
    move(duration: number) {
        console.log("Moving along...");
        this.makeSound(duration);
    }
    abstract attack(does: boolean): undefined;
    beSafe(does: boolean) {
        if (this.attack(does)) {
            if (does === true) {
                return console.log("Be safe , It may attack you !")
            }
            return console.log("It is a dangerous animal and may attack you !")
        }
        console.log("It will not attack you and is quite friendly !");
    }
}

class Lion extends Animal {
    makeSound(duration: number): void {
        console.log("Roar roar...")
    }
    attack(does: true): undefined {
    }
}

const lion = new Lion();
lion.move(20);
lion.makeSound(10);

// ! Classes and interfaces
interface janwar {
    name: string;
    move(): void;
}

class kutta implements janwar {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is running.`);
    }
}

const dog = new kutta("Buddy");
dog.move(); // "Buddy is running."


// ! Static
class MathUtil {
    static PI = 3.14; // Static property

    static calculateCircleArea(radius: number): number {
        return this.PI * radius * radius; // Access static property using "this"
    }
}

console.log(MathUtil.PI); // 3.14
console.log(MathUtil.calculateCircleArea(5)); // 78.5


class calculator {
    static instanceCount: number = 0;
    name: string;

    constructor(name: string) {
        calculator.instanceCount++;
        this.name = name;
    }

    static decreaseCount() {
        this.instanceCount--;
    }
}

const cal1 = new calculator("Tim");
console.log(calculator.instanceCount)

// ! GENERIC'S
class DataStore<T> {
    private items: T[] = [];
    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

interface User { // ? I can also use this in place of T 
    name: string;
    id: number;
}

const data = new DataStore<string>(); // ? Here I am using string in place of T , even I can use numbers , boolean etc ! 

function getValue<K, V>(key: K, valueOne: V, valueTwo: V): V {
    if (key) {
        return valueOne;
    }
    return valueTwo;
}

getValue<string, number>("Batman", 1, 2);

//! TYPE ALIASES
type Coordinates = [number, number];
type strings = [string][];
type stringCoords = Coordinates | strings

function compareCoords(p1: Coordinates, p2: Coordinates): Coordinates {
    return p1;
}

// ! UNION AND INTERSECTION
// ? UNION
type stringOrNumber = string | number | boolean
type strOrNum = (string & number)[];

interface businessPartner {
    name: string;
}

interface contact {
    address: string;
    phoneNo: number
}

type businessContact = businessPartner | contact;
const doingBusiness = (business: businessContact) => {
    if ("name" in business) {
        console.log(business.name, " here ! , Nice to meet you !")
    } else {
        console.log(business.address, business.phoneNo);
    }
}

// ! TYPE GUARDS
class Dog {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Cat {
    firstName: string
    constructor(firstName: string) {
        this.firstName = firstName
    }
}

function isDog(pet: Cat | Dog): pet is Dog {
    return (pet as Dog).lastName !== undefined;
}

function getName(animal: Dog | Cat) {
    if (isDog(animal)) {
        console.log(`There is a animal whose firstName is ${animal.firstName} and whose lastName is ${animal.lastName}`);
    } else {
        console.log(`The animal's firstName is ${animal.firstName}`);
    }
}

// ! DISCRIMINATED UNIONS 
interface warning {
    type: "warning"
    msg: string
}

interface info {
    type: "info"
    text: string
} 

interface success {
    type: "success"
    message: string
}

type log = warning | info | success;
let log: log;

function handleMessage(log: log) {
    switch (log.type) {
        case "warning":
            console.log(log.msg);
            break;
        case "info":
            console.log(log.text)
            break;
        case "success":
            console.log(log.message)
            break;
    }
}

// ! UTILITY TYPES
interface todo {
    title:string 
    descirption?:string
}

// Partial
const todolist = (todo:Partial<todo>) => {  // ? It makes the property of the interface optional 
    todo.descirption;
    todo.title;
}

// Readonly
const myTodo :Readonly<todo> = {title:"I am a batman"}; // ? It will make this read only , I can use this value wherever I want to but I cannot change it 

// Record
interface pageInfo {
    title:string
}

// * console.log("Hello world ,  there is the best thing in this world I can be anything I want to be I am going to cut any distractions that are out there and I am going to foucs on my life and nothing else , I am going to be the man that I always wanted to be and I will be that man , mark my words ! I have taken this commitment that I am going on discipline and no one can stop me now , I will do anything that I necessary to evolve and grow and I will do it with my whole heart and will not fear taking steps ahead !"f)

const pages :Record<string , pageInfo> = {
    home:{title:"It is the Home page"} , 
    about:{title:"It is the about page"} , 
    contact : {title:"It is the contact page !"}
}

// ? It is just a cleaner way of writing the code , here home , about and contact belong to the string part and the title is defined in the pageInfo interface

const pageNumber:Record<number , pageInfo> = {
    0: {title:"Homepage"} , 
    1 : {title:"AboutPage"} , 
    2 :{title:"ContactPage"}
}

// Pick
interface todos {
    id:number
    title:string
    description:string
}

const myTodos :Pick<todos , "title" | "description" > = { // ? Here from the todos , I am picking only title and description property here 
    title:"Coding" , 
    description:"Work on the animite project !"
}

// Omit

const todosPreview : Omit<todos , "id"> = { // ? It's opposite of pick
    title:"Make lunch" , 
    description:"Don't overcook it and make it nutrious !"
}

// ! Import and exporting modules
import { addition , subtraction } from "./utils"; // ? If I will add .ts at the end it will stop working 
const result = addition(1 , 2);
console.log(result);
subtraction(5 , 5);

// ! NAMESPACES
namespace Utils {
    export const Name:string = "Aman Bisht" 
    export const adding = (x :number , y:number) :number => {
        return x + y;
    }
    export class myClass {
        age:number 
        constructor(age:number) {
            this.age = age
        }
    }
    export interface myinterface{
        newType:string
    }
}

const name  = Utils.Name;
// I can export namespaces anywhere and I don't even have to use the import or export statement 