// ! Import and export modules

const addition = (x:number , y:number) :number => { // ? I can either use export just before const
    return x + y;
}

const subtraction = (x:number , y:number):number => {
    return x - y
}

export {addition , subtraction};