  // FizzBuzz Challenge
        for (let i = 1; i <= 100; i++) {
            let output = '';

            // Check for multiples of 3 and 5
            if (i % 3 === 0) {
                output += 'Fizz';
            }
            if (i % 5 === 0) {
                output += 'Buzz';
            }

            // If output is empty, it means it's neither a multiple of 3 nor 5
            if (output === '') {
                output = i;
            }

            console.log(output); // Log the output to the console
        }
  