const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to prompt the user for input and perform the conversion
function temperatureConverter() {
    rl.question("Type 'C' to convert Celsius to Fahrenheit, or 'F' to convert Fahrenheit to Celsius: ", (choice) => {
        choice = choice.toUpperCase().trim();
        
        if (choice !== 'C' && choice !== 'F') {
            console.log("Invalid choice! Please enter 'C' for Celsius or 'F' for Fahrenheit.");
            rl.close();
            return;
        }

        rl.question("Enter the temperature value: ", (tempInput) => {
            const temperature = parseFloat(tempInput);

            if (isNaN(temperature)) {
                console.log("Invalid temperature! Please enter a valid number.");
                rl.close();
                return;
            }

            // Perform conversion based on the user's choice
            let result;
            if (choice === 'C') {
                result = celsiusToFahrenheit(temperature);
                console.log(`${temperature}°C is equal to ${result.toFixed(2)}°F`);
            } else {
                result = fahrenheitToCelsius(temperature);
                console.log(`${temperature}°F is equal to ${result.toFixed(2)}°C`);
            }
            rl.close();
        });
    });
}

// Run the converter when the script is executed
temperatureConverter();
