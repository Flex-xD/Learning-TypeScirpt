// BASIC VARIABLES TYPES
let num: number;
let str: string;
let bool: boolean;
let nu: null;
let undef: undefined;
let voi: void; // This one is used when a function does something but dosen't return anything 

// ARRAYS and TUPLES
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

const coords : [(number | string)[] , (null | boolean)[]] = [
    [1 , 2 , "Good"] , 
    [null , true , false]
];

// LITERALS : These are like the instances of the basic variables types
let directions : "north" | "south" | "east" | "west"; // Representation of Literals
directions = "south";
if (directions === "south") {
    console.log("You have to move east now")
} else {
    console.log("It is not in the south direction !")
}

// Enum (Enumeration)
enum numbers {
    small = 100, 
    medium = 200, 
    large = 300
}

enum statusCode {
    successCode = 200 ,
    somethingCreated = 201 ,
    clientError = 400 ,
    unAuthorized = 401  ,
    unexpectedError = 500
}

let value:number;
value = 200;
value === numbers.medium ? console.log("Value is" , numbers.medium) : console.log("Value is not" , numbers.medium);


// ANY , UNKNOWN and TYPECASTS
// Assigning any type to a variable will stop the type checking of the typescript 
let x : any;
x = 3;
x = "hello";
x = true;

const process = (input : any) : void  =>{
    console.log("processng" , input);
}
// This can be string , number , file etc
process(2); // WORKS
process("parameter"); // WORKS
process(true); // WORKS

// UNKNOWN 
const processing = (input :unknown) : void => {
    if (typeof input == "number") {
        console.log(`Processing ${input}`);
    } else if (typeof input == "string") {
        console.log(`Processing ${input}`);
    } else if (input instanceof Blob) {
        console.log(`Processing ${input}`);
    }
}



processing(1) // Correctly Identified as Number 
processing("Hello") // Correctly Identified as String 
processing(new Blob()) // Correctly Identified as Blob 
