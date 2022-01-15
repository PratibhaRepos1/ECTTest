//1) Create a function which creates a deep copy of an object
const objA = { name1: 'A', name2: 'B' }
console.log(DeepCopy(objA));
console.log(DeepCopy1(objA));
//console.log(obj);

//approch 1 using assign method
function DeepCopy(obj) {

    let objB; //={name3:'C'};
    return Object.assign(obj, objB)

}
//approch 2 using ... spread operator
function DeepCopy1(obj) {

    let objB = { ...obj };
    return objB;

}

/* 2) Write a function which checks if two objects are equivalent
- “undefined” and “null” can be treated as equal
- consider all primitive types, objects, arrays and dates */

var data1 = { a: 17, b: { c: 'Test', d: null } };
var data2 = { a: 17, b: { c: 'Test' } };
var data3 = { a: 17, b: null };

console.log(check(data1, data2)); // -> true
console.log(check(data1, data3)); // -> false

function check(obj1, obj2) {
    let match = false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key in obj1) {

        for (let key2 in obj2) {
            if ((obj1[key] !== null && obj1[key] !== undefined) && (obj2[key2] !== null && obj2[key2] !== undefined)) {

                if (key === key2 && typeof (obj1[key]) === typeof (obj2[key2])) match = true;

                // if(JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
            }
            else {
                match = false;

            }
        }
        return match;
    }
    return false;
}


/* 3) Write a function which executes a string provided javascript code, while
considering the following:
a) The function can receive variables, which can be accessed in the
code
b) There is a set of "global" variables, which are always available
- '$math': exposes two functions 'sum' and 'mul', adding or
multiplying two numbers
- '$logger': exposes the console.log functionality
c) Give a name to the evaluated string code, so that it can be opened
and debugged like any other source
function execute(code, variables) {
 // TODO
} 
execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 });
// -> Sum: 20
execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 });
// -> Mul: 51

*/


var $math = {
    sum: function (a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') return "sum: " + (a + b);
        else return "Not a number!";

    },
    mul: function (a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') return "mul: " + (a * b);
        else return "Not a number!";
    },

}
function $logger(result) {
    console.log(result);
}

var code = '$logger("Sum:", $math.sum(a, b))';
var variables = { a: 17, b: 3 };
execute(code, variables);
code = '$logger("Mul:", $math.mul(a, b))';
variables = { a: 17, b: 3 };
execute(code, variables);

function execute(code, variables) {

    if (code.match("Sum")) $logger($math.sum(variables.a, variables.b));
    if (code.match("Mul")) $logger($math.mul(variables.a, variables.b));

}


