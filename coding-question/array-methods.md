### JavaScript provides several built-in methods that can be used to manipulate arrays. Here are some commonly used array methods in JavaScript:

1. `push()`: Adds one or more elements to the end of an array and returns the new length of the array.
```javascript
var fruits = ["apple", "banana"];
fruits.push("orange", "grape");
console.log(fruits);
// Output: ["apple", "banana", "orange", "grape"]
```

2. `pop()`: Removes the last element from an array and returns that element.
```javascript
var fruits = ["apple", "banana", "orange"];
var removedFruit = fruits.pop();
console.log(removedFruit);
// Output: "orange"
console.log(fruits);
// Output: ["apple", "banana"]
```

3. `shift()`: Removes the first element from an array and returns that element.
```javascript
var fruits = ["apple", "banana", "orange"];
var removedFruit = fruits.shift();
console.log(removedFruit);
// Output: "apple"
console.log(fruits);
// Output: ["banana", "orange"]
```

4. `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
var fruits = ["banana", "orange"];
fruits.unshift("apple", "grape");
console.log(fruits);
// Output: ["apple", "grape", "banana", "orange"]
```

5. `concat()`: Combines two or more arrays and returns a new array.
```javascript
var fruits = ["apple", "banana"];
var vegetables = ["carrot", "spinach"];
var combined = fruits.concat(vegetables);
console.log(combined);
// Output: ["apple", "banana", "carrot", "spinach"]
```

6. `slice()`: Returns a new array that contains a portion of the original array.
```javascript
var fruits = ["apple", "banana", "orange", "grape", "kiwi"];
var sliced = fruits.slice(1, 4);
console.log(sliced);
// Output: ["banana", "orange", "grape"]
```

7. `splice()`: Changes the contents of an array by removing, replacing, or adding elements in-place.
```javascript
var fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape", "kiwi");
console.log(fruits);
// Output: ["apple", "grape", "kiwi", "orange"]
```

