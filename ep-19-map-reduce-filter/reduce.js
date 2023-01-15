const arr = [5, 1, 3, 2, 6];

//sum of arr

function findSum(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        sum = sum + arr[i];   
    }
    return sum;
}

console.log(findSum(arr));

const sum = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(sum);

//find max

function findMax(arr) {
    let max = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
       } 
    }
    return max;
}
console.log(findMax(arr));

const max = arr.reduce(function (max, curr) {
    if (curr>max) {
        max =  curr
    }
    return max;
}, 0);

console.log(max);

const users = [
    { fname: "rupa", lname: "chandra", age: 26 },
    { fname: "nitu", lname: "pramanik", age: 26 },
     { fname: "kishan", lname: "kumar", age: 50 },
    { fname: "aman", lname: "pramanik", age: 75 }
]
// {26:2,50:1,75:1}

const output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(output);