let score = prompt("Enter the student's score:");

// Convert the input to a number
score = Number(score);

// Assign grade based on the score
if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score");
}

   