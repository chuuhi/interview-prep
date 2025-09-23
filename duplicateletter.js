// Given a string which is guaranteed to have a duplicate lower case letter. Return this lower case letter. 
function findDuplicateLowercaseLetter(str){
    for (let i = 0; i < str.length; i++){
        let letter = str[i]
        if (letter >= 'a' && letter <= 'z'){
            if (str.indexOf(letter) !== str.lastIndexOf(letter)){
                return letter
            }
        }
    }
}

console.log(findDuplicateLowercaseLetter("gattc")) // "t"
console.log(findDuplicateLowercaseLetter("hello")) // "l"
console.log(findDuplicateLowercaseLetter("apple")) // "p"
console.log(findDuplicateLowercaseLetter("Westwood")) // "o"

// use set
function findDuplicateLetter(str) {
    const seen = new Set();
    
    for (let char of str) {
        if (char >= 'a' && char <= 'z') { 
            if (seen.has(char)) {
                return char; 
            }
            seen.add(char);
        }
    }
    return null; 
}
console.log(findDuplicateLetter("abccba")); // "c" (first duplicate encountered)
console.log(findDuplicateLetter("hello")); // "l"
console.log(findDuplicateLetter("programming")); // "r"
