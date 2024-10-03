 // to perform the calculation
        function calculator(num1, num2, operator) {
            switch (operator) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    if (num2 !== 0) {
                        return num1 / num2;
                    } else {
                        return "Error: Division by zero";
                    }
                default:
                    return "Error: Invalid operator";
            }
        }

        // Get user input for numbers and operator
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));
        let operator = prompt("Enter the operator (+, -, *, /):");

        // Perform the calculation and display the result
        let result = calculator(num1, num2, operator);
        console.log("The result of " + num1 + " " + operator + " " + num2 + " is: " + result);

