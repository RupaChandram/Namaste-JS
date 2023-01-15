/**
 * To transform the value of an array.
 * To double the array or triple the array etc
 */

const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

 //another way of writing

const output = arr.map(function binary(x) {
    return x.toString(2);
}); 

//arrow function

const arrow=arr.map((x)=> {
    return x.toString(2);
}); 

//remove return when code is one line no need to wrap into the curley braces

const withoutReturn = arr.map((x) => x.toString(2)); 

const users = [{ fname: "rupa", lname: "chandra" }, { fname: "nitu", lname: "pramanik" }]

// full name

const fullnames = users.map((x) => x.fname + "  " + x.lname);
console.log(fullnames);


// const output = arr.map(double);
//console.log(output);
//[ 10, 2, 6, 4, 12 ]

// const output = arr.map(triple);
//console.log(output);
//[ 10, 2, 6, 4, 12 ]

// const output = arr.map(binary ); 
//console.log(output);
//[ 10, 2, 6, 4, 12 ]

