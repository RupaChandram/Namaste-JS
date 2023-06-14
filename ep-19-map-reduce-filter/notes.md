### map, reduce and filter

* map, reduce and filter and higher order function in JS.

### map
* map() function is used to transform the array and get a new array out of it.

```js
const binary=arr.map((x)=>  x.toString(2)); 

```

### filter
* filter function is used to filter
* eg.filter the even number, filter odd number, filter the all number which are greater than 4
* Eg:
```js
const filter = arr.filter((x) => x > 4);

```

### reduce
* like the name reduce, it's not going to reduce anything.
* It works like iterate the array and come with the single value
* eg: iterate an array and find out the greatestnumber.
* It takes two parameters. First accumulator and second one is current.
* accumulator:used to accumulate the value or get the result 
* current:current represents the iterated values
* eg:
```js
const sum = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
```

#### the main difference between map() and forEach() is that map() creates a new array with the transformed values, while forEach() is used for iterating over the elements of an array and performing side effects. Additionally, map() returns a new array, while forEach() does not return anything.



