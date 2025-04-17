document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const income = parseFloat(document.getElementById('income').value);
    const expense = parseFloat(document.getElementById('expense').value);
    
    if (isNaN(income) || isNaN(expense) || income < 0 || expense < 0) {
        alert("Please enter valid positive numbers for income and expenses.");
        return;
    }
    
    updateBudget(income, expense);
});

let totalIncome = 0;
let totalExpense = 0;

function updateBudget(income, expense) {
    totalIncome += income;
    totalExpense += expense;
    
    displaySummary();
    drawChart();
}

function displaySummary() {
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <p>Total Income: $${totalIncome.toFixed(2)}</p>
        <p>Total Expense: $${totalExpense.toFixed(2)}</p>
        <p>Balance: $${(totalIncome - totalExpense).toFixed(2)}</p>
    `;
}