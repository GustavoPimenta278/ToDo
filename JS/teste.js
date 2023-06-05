function reverseString(string) {
    let reversedString = "";

    for (let index = string.length - 1; index >= 0; index--) {
        reversedString += string[index]
        
    }
    return reversedString
}


console.log(reverseString("Pedro"))