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