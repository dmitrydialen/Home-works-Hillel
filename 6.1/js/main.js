function removeChars(originalStr, charsToRemove) {
    let regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    return originalStr.replace(regex, '');
}

let result = removeChars("hi my name is Dima", ['h', 'i',]);
console.log(result);
