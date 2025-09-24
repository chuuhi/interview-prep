// Given a string such as "minusplusplusminusminus" , return the signs instead. "-++--"

function plusMinusSign(str){
    let sign = ""
    for (let i = 0; i < str.length; i++){
        if (i <= str.length - 5 && str.slice(i, i + 5) === 'minus'){
            sign += '-'
            i += 4
        }else if (i <= str.length - 4 && str.slice(i, i + 4) === 'plus'){
            sign += '+'
            i += 3
        }
    }
    return sign
}

console.log(plusMinusSign('minusplusplusminusminus')) // "-++--"
console.log(plusMinusSign('plusminusplus')) // "+-+"
console.log(plusMinusSign('minusminusminus')) // "---"

// while loop
function extractSigns(str) {
    let result = '';
    let i = 0;
    
    while (i < str.length) {
        if (str.substring(i, i + 5) === 'minus') {
            result += '-';
            i += 5; // Skip past "minus"
        } else if (str.substring(i, i + 4) === 'plus') {
            result += '+';
            i += 4; // Skip past "plus"
        } else {
            i++; // Move to next character if no match
        }
    }
    
    return result;
}

console.log(extractSigns("minusplusplusminusminus")); // "-++--"
console.log(extractSigns("plusminusplus")); // "+-+"
console.log(extractSigns("minusminusminus")); // "---"