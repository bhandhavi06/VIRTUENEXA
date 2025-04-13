function validateInput() {
    const input = document.getElementById('numberInput');
    const value = input.value;
    const regex = /^[1-9]\d*$/;

    if (!regex.test(value)) {
        input.setCustomValidity("Please enter a positive integer.");
    } else {
        input.setCustomValidity("");
    }
}

function calculateFactorial() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);

    if (isNaN(number) || number <= 0) {
        document.getElementById('result').textContent = "Please enter a valid positive integer.";
        document.getElementById('method').textContent = "";
        return;
    }

    const iterativeResult = factorialIterative(number);
    const recursiveResult = factorialRecursive(number);

    document.getElementById('result').textContent = `Iterative: ${iterativeResult} | Recursive: ${recursiveResult}`;
    document.getElementById('method').textContent = `Calculated using both methods.`;
}

function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}