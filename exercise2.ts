// Basic Calculator with Class and Interfaces

interface ICalculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number | string;
}

class Calculator implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | string {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
}

// Usage example
const calculator = new Calculator();

console.log("Addition:", calculator.add(5, 3)); // Output: 8
console.log("Subtraction:", calculator.subtract(5, 3)); // Output: 2
console.log("Multiplication:", calculator.multiply(5, 3)); // Output: 15
console.log("Division:", calculator.divide(5, 3)); // Output: 1.6666666666666667
console.log("Division by zero:", calculator.divide(5, 0)); // Output: "Cannot divide by zero"
