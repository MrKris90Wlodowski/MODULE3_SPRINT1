// listToDict
// map
// filter
// reduce

// Example for cars
const cars = {
  modelS: { brand: "Tesla", color: "white", price: 79999 },
  corolla: { brand: "Toyota", color: "silver", price: 20000 },
  mustang: { brand: "Ford", color: "red", price: 45000 },
  civic: { brand: "Honda", color: "blue", price: 22000 },
  model3: { brand: "Tesla", color: "black", price: 39999 },
  beetle: { brand: "Volkswagen", color: "yellow", price: 18000 },
};

// Example for students
const students = {
  alice: { age: 20, major: "Computer Science", gpa: 3.8 },
  bob: { age: 19, major: "Mathematics", gpa: 3.2 },
  charlie: { age: 21, major: "History", gpa: 3.5 },
  diana: { age: 22, major: "Biology", gpa: 3.9 },
  eric: { age: 20, major: "Psychology", gpa: 3.6 },
  fiona: { age: 19, major: "Literature", gpa: 3.4 },
};

interface Dict<T> {
  [k: string]: T;
}

function mapDict<T,U>(obj: Dict<T>,cb: (key: string,value: T) => U): Dict<U> {
    const result: Dict<U> = {}
    for (const key in obj) {
        result[key] = cb(key,obj[key])
    }
    return result
}

function filterDict<T>(obj: Dict<T>,cb: (key: string,value: T) => boolean): Dict<T> {
    const result: Dict<T> = {}
    for (const key in obj) {
        const value = cb(key,obj[key])
        if (value) {
            result[key] = obj[key]
        }
    }
    return result
}

function reduceDict<T,U>(obj: Dict<T>,cb: (acc: U,key: string,value: T) => U,initial: U): U {
    let result: U = initial
    for (const key in obj) {
        result = cb(result,key,obj[key])
    }
    return result
}

// COMMANDS

// BLACK WEEK DISCOUNT CARS
console.log(mapDict(cars,(k,v) => ({brand: v.brand, color: v.color, price: v.price*0.5})))
//SEARCH IT NERDS STUDENTS
console.log(filterDict(students,(k,v) => v.major === "Computer Science" || v.major === "Mathematics"))
// SEARCH COMMON BRAND CARS
console.log(filterDict(cars,(k,v) => v.brand === "Tesla"))
// TOTAL VALUE ALL CARS
console.log(reduceDict(cars,(acc,k,v) => acc + v.price,0))

// Array.prototype.map, but for Dict
// function mapDict(...args: any[]): any {}
// Array.prototype.filter, but for Dict
// function filterDict(...args: any[]): any {}
// Array.prototype.reduce, but for Dict
// function reduceDict(...args: any[]): any {}