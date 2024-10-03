let num = prompt("Enter a number:");

// Convert the input to a number
num = Number(num);

// Check if the number is divisible by 5
if (num % 5 === 0) {
    console.log(num + " is a multiple of 5");
} else {
    console.log(num + " is not a multiple of 5");
}
