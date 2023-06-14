let str = "This is reverse word";

//One way
let reverse = str.split(" ").reverse().join(" ");
console.log(reverse);

//Second way

reverseWord = (str) => {
    var revWord = [];
    var words = str.split(" ");
    for (let i = words.length-1; i>=0; i--){
        revWord.push(words[i]);
    }
    return revWord.join(" ");
}
console.log(reverseWord(str));