export class MathFunctions {
    static findFibonacciNumber(n: number): number {
        let firstNumber: number = 0;
        let secondNumber: number = 1;
        let thirdNumber: number = 1;

        if (n < 0) {
            throw new Error('n must be >= 0');
        }

        if (n < 2) {
            return n;
        }

        for (let i = 2; i <= n; i++) {
            thirdNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = thirdNumber;
        }

        return thirdNumber;
    }

    static findFibonacciNumberRecursive(n: number): number {
        if (n < 0) {
            throw new Error('n must be >= 0');
        }

        if (n < 2) {
            return n;
        }

        return MathFunctions.findFibonacciNumberRecursive(n - 1) + MathFunctions.findFibonacciNumberRecursive(n - 2);
    }

    static factorial(n: number): number {
        if (n === 0) {
            return 1;
        }

        if (n < 0) {
            throw new Error('n must be => 0');
        }

        let result = n;

        for (let i = 1; i < n; i++) {
            result *= n - i;
        }

        return result;
    }


    static factorialRecursive(n: number): number {
        if (n === 0) {
            return 1;
        }

        if (n < 0) {
            throw new Error('n must be => 0');
        }

        return n * MathFunctions.factorialRecursive(n - 1);
    }
}
