const number = prompt("Enter a three-digit number").trim();

if (number === null || number === "") {
  console.log("No input provided.");
} else if (number.length !== 3 || isNaN(number)) {
  console.log("Please enter a valid three-digit number.");
} else {
  const digit1 = number[0];
  const digit2 = number[1];
  const digit3 = number[2];

  if (digit1 === digit2 && digit2 === digit3) {
    console.log("All digits are the same.");
  } else if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    console.log("There are some identical digits.");
  } else {
    console.log("All digits are different.");
  }
}
