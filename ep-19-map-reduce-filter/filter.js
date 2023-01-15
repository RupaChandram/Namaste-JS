const arr = [5, 1, 3, 2, 6];

// filter odd values

function isOdd(x ) {
    return x % 2;
}

//filter even

function isEven(x ) {
    return x%2===0;
}
 
// filter greater than 4
const filter = arr.filter((x) => x > 4);

//other way
function isGreaterThan4(x ) {
    return x>4;
}

const users = [
    { fname: "rupa", lname: "chandra", age: 26 },
    { fname: "nitu", lname: "pramanik", age: 26 },
     { fname: "kishan", lname: "kumar", age: 50 },
    { fname: "aman", lname: "pramanik", age: 75 }
]

//filter names whose age is greater than 26

const greater26 = users.filter((x) => x.age > 26).map((x)=>x.fname);
console.log(greater26);

// const output = arr.filter(isEven);
// console.log(output);
// [ 2, 6 ]

// const output = arr.filter(isOdd);
// console.log(output);
// [ 5, 1, 3 ]

const output = arr.filter(isGreaterThan4); 
console.log(output);
// [4,6]