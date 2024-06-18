let line1 = prompt("Enter the first line:");
let line2 = prompt("Enter the second line:");
let line3 = prompt("Enter the third line:");

let lines = [line1, line2, line3];

lines.sort(() => Math.random() - 0.5);

alert(lines.join('\n'));