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
function applyFunc (
    func:((x:number , y:number) => number)[] ,
        values:[number , number][]
):number[]{
    const results = [] as number[];
    for ( let i = 0 ; i < func.length ; i++) {
        const args = values[i];
        const result = func[i](args[0] , args[1]);
        results.push(result);
    }
    return results;
}

applyFunc([mul, div], [[1, 2], [4, 2]]);

// ! Advanced function types
function calculateSum (...numbers:number[]):number{
    let value = 0;
    for (let i = 0 ; i < numbers.length ; i++) {
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
    name:string , 
    age:number ,
    height:number ,
    skills :string[] ,
    hobbies?:string[]
}

interface employment extends Person { // ? The properties of the Person interface will be assigned to the employment interface !
    haveExperience: [boolean , number];
    watchesAnime?:boolean ,
    wantRemoteJob:boolean
} 

const person :employment = {
    name:"Aman Bisht" ,
    age:17 ,
    height:152 ,
    skills:["Html" , "CSS" , "JavaScript" , "TypeScript" , "React" , "MongoDB" , "Express" , "Node" , "TailwindCSS" , "ShadCN"] , 
    haveExperience:[true , 5] , 
    wantRemoteJob:true
}

const getPerson = (person:employment) :employment => {
    return {
        name:"Aman Bisht" ,
        age:17 ,
        height:152 ,
        skills:["Html" , "CSS" , "JavaScript" , "TypeScript" , "React" , "MongoDB" , "Express" , "Node" , "TailwindCSS" , "ShadCN"] , 
        haveExperience:[true , 5] , 
        wantRemoteJob:true
    }
}