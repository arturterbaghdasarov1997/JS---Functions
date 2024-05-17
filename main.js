// Function for comparing values
function compareValues(a, b) {
    if (a == b) {
        return "a is equal to b";
    } else {
        return "a is not equal to b";
    }
}

console.log(compareValues(8, 8));
console.log(compareValues(3, "3"));
console.log(compareValues(7, 9));
console.log(compareValues("hello", 4));
console.log(compareValues("hello", "world"));
console.log(compareValues("hello", "hello"));

// Function for converting F° to C°
function fahrenheitToCelsius(fahrenheit) {
    if (isNaN(fahrenheit)) {
        return false;
    } else {
        let celsius = (fahrenheit - 32) * 5 / 9;
        return celsius;
    }
}

console.log(fahrenheitToCelsius(38));
console.log(fahrenheitToCelsius(54));
console.log(fahrenheitToCelsius(82));
console.log(fahrenheitToCelsius(100));
console.log(fahrenheitToCelsius("150"));
console.log(fahrenheitToCelsius("hello"));

// Function for arithmetic operations
function arithmeticOperation(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return false;
            }
            return a / b;
        default:
            return false;
    }
}
    
console.log(arithmeticOperation(6, 2, '+'));
console.log(arithmeticOperation(9, 2, '-'));
console.log(arithmeticOperation(3, 7, '*'));
console.log(arithmeticOperation(10, 2, '/'));
console.log(arithmeticOperation(4, 0, '/'));
console.log(arithmeticOperation(6, 'abc', '+'));
console.log(arithmeticOperation('abc', 8, '*'));
console.log(arithmeticOperation(3, 'abc', '-'));
console.log(arithmeticOperation('abc', 5, '/'));
console.log(arithmeticOperation(8, 2, '&'));