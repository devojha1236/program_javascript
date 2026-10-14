// Arithmetic
let a = 10;
let b = 5;
console.log("Addition =", a+b);
console.log("Subtraction =", a-b);
console.log("Multiplication =", a*b);
console.log("Division =", a/b);
console.log("Modulus =", a%b);

// compare two number
let a = 10;
let a = 5;
console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);
console.log(a>=b);
console.log(a<=b);

// Demosnstrate logical operators
let a = 10;
let a = 5;
console.log(a > 5 && b < 10);
console.log(a < 5 !! b < 10);
console.log(!(a > 5));

// positive number 
let a = 10;
if(num > 0) {
    console.log(" positive number");
} else{
    console.log("Not positive number")
}

// Even and odd number
let n = 7;
if (n % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// Voting Eligibility Using If-Else
let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


let n = -5;
if (n > 0) {
    console.log("Positive number");
} else if (n < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// Grades Based on Marks Using Else-If
let marks = 85;
if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
} else if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// Find the Largest of Two Numbers
let a = 25, b = 40;
if (a > b) {
    console.log(a, "is largest");
} else if (b > a) {
    console.log(b, "is largest");
} else {
    console.log("Both numbers are equal");
}

// a Year Is a Leap Year
let year = 2024;
if (year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}


// Print Numbers from 1 to 10 Using a For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Print the Multiplication Table of a Given Number
let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}


// Calculate the Sum of the First N Natural Numbers
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum =", sum);


// Print All Even Numbers Between 1 and 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


// Count Numbers Divisible by 3 Between 1 and 100
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        count++;
    }
}
console.log("Count =", count);


// Find the Largest of Three Numbers
let a = 10, b = 25, c = 15;
if (a >= b && a >= c) {
    console.log(a, "is largest");
} else if (b >= a && b >= c) {
    console.log(b, "is largest");
} else {
    console.log(c, "is largest");
}


// Check Whether a Number Is Divisible by Both 3 and 5
let n = 30;
if (n % 3 === 0 && n % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}


// Calculate the Factorial of a Number Using a For Loop
let n = 5;
let fact = 1;
if (!Number.isInteger(n) || n < 0 || n > 170) {
    console.log("Enter an integer between 0 and 170");
} else {
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial =", fact);
}
Print Numbers from 50 to 1 in Reverse Order
for (let i = 50; i >= 1; i--) {
    console.log(i);
}


// Calculate the Sum of All Odd Numbers Between 1 and 10
let sum = 0;
for (let i = 1; i <= 100; i += 2) {
    sum += i;
}
console.log("Sum of odd numbers =", sum);
