let number = prompt("Enter a five-digit number:");

if (number.length !== 5 || isNaN(number)) {
  alert("Please enter a valid five-digit number.");
} else {
  let digits = number.split('').join(' ');
  alert(digits);
}