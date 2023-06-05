function reverseString(string) {
    let reversedString = "";s

    for (let index = string.length -1; index >= 0; index--) {
        reversedString = reversedString + string[index]
        console.log(string[index])
        
    }
    
    return reversedString
}

console.log(reverseString('carro'))