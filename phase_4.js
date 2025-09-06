const userName = 'Zahidul Islam';
const income = 5000;

// Multiple expenses
let rent = 1200;
let groceries = 600;
let transport = 200;
let entertainment = 300;

// calculate the expenses
let totalExpenses = rent + groceries + transport + entertainment;

// Tax deduction (10% of income)
let tax = income * 0.1;

// Net income after the tax
let netIcome = income - tax;

// Calculate remaining balance
let balance = netIcome - totalExpenses;

// Savings (20% of remaining balance)
let savings = balance * 0.2;

console.log('Personal Budget Tracker App');
console.log('User: ' + userName);
console.log('Total Income: $' + income);
console.log('Total Expenses: $' + totalExpenses);
console.log('Tax Deducted (10%): $' + tax);
console.log('Net Income After Tax: $' + netIcome);
console.log('Remaining Balance: $' + balance);
console.log('Savings (20% of balance): $' + savings);


