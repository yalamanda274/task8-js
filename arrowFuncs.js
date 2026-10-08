//Arrow functions Without Input & Without Return
//1.Number Pyramid
let numberPattern = () => {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row = row + j + " ";
        }
        console.log(row);
    }
};
numberPattern();

//2.Print Perfect Numbers
let perfectNumbers = () => {
    for (let num = 1; num <= 100; num++) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                sum = sum + i;
            }
        }
        if (sum == num) {
            console.log(num);
        }
    }
};
perfectNumbers();

//3.Print a Multiplication Table
let multiplicationTable = () => {
    let num = 8;
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
};
multiplicationTable();

//Arrow functions With Input & Without Return
//Check Strong Number
let checkStrongNum = (num) => {
    let original = num;
    let sum = 0;
    while (num > 0) {
        let ld = num % 10;
        let fact = 1;
        for (let i = 1; i <= ld; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        num = (num - ld) / 10;
    }
    if (sum == original) {
        console.log(original + " is a Strong Number");
    }
    else {
        console.log(original + " is not a Strong Number");
    }
};
checkStrongNum(145);

// Find Second Largest of Three Numbers
let secondLargest = (a, b, c) => {
    let largest;
    let second;
    if (a > b && a > c) {
        largest = a;
        second = b > c ? b : c;
    }
    else if (b > a && b > c) {
        largest = b;
        second = a > c ? a : c;
    }
    else {
        largest = c;
        second = a > b ? a : b;
    }
    console.log("Second largest =", second);
};
secondLargest(45, 78, 62);

// Calculate Parking Charge
let parkingCharge = (hours) => {
    let charge;
    if (hours <= 2) {
        charge = hours * 20;
    }
    else {
        charge = (2 * 20) + ((hours - 2) * 30);
    }

    console.log("Parking Charge =", charge);
};
parkingCharge(5);


// Arrow functions Without Input & With Return
// Find Sum of Odd Numbers
let oddSum = () => {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {

        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
};
let resultt = oddSum();
console.log("Sum of odd numbers =", result);

// Find Smallest Digit
let smallestDigit = () => {
    let num = 583726;
    let smallest = 9;
    while (num > 0) {
        let digit = num % 10;
        if (digit < smallest) {
            smallest = digit;
        }
        num = (num - digit) / 10;
    }
    return smallest;
};
let resultu = smallestDigit();
console.log("Smallest digit =", result);

// Calculate Total and Average
let calculateAverage = () => {
    let m1 = 80;
    let m2 = 75;
    let m3 = 90;
    let m4 = 85;
    let total = m1 + m2 + m3 + m4;
    let average = total / 4;
    return average;
};
let result = calculateAverage();
console.log("Average =", result);

// Arrow functions With Input & With Return
// Find GCD
let findGCD = (a, b) => {
    let smaller;
    if (a < b) {
        smaller = a;
    }
    else {
        smaller = b;
    }
    let gcd = 1;

    for (let i = 1; i <= smaller; i++) {

        if (a % i == 0 && b % i == 0) {
            gcd = i;
        }
    }
    return gcd;
};
let res = findGCD(24, 36);
console.log("GCD =", result);

// Calculate Discounted Price
let discountedPrice = (price, discount) => {
    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;
    return finalPrice;
};
let resul = discountedPrice(2000, 15);
console.log("Final Price =", result);

// Convert Minutes to Hours and Minutes
let convertTime = (minutes) => {
    let hours = (minutes - (minutes % 60)) / 60;
    let remainingMinutes = minutes % 60;
    return hours + " hours " + remainingMinutes + " minutes";
};
let resu = convertTime(145);
console.log("Time =", result);


// annonymous functions
//Fibonacci series using Anonymous function without input without return.
let fibonacci = function() {
let a=0;
let b=1;
for (let i=1;i<=10;i++){
    console.log(a);

    let c=a+b;
    a=b;
    b=c;
}
};
fibonacci();

//Check positive,negative or Zero using Anonymous function with input without return.
let checkNumber = function (num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
};

checkNumber(-5);

//count digits using Anonymous function with input without return.
let countDigits = function (num) {
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    console.log("Number of digits:", count);
};

countDigits(58392);

//Armstrong Number Anonymous function with input without return.
let checkArmstrong = function (num) {
    let original = num;
    let sum = 0;
    let digits = String(num).length;

    while (num > 0) {
        let digit = num % 10;
        sum = sum + digit ** digits;
        num = Math.floor(num / 10);
    }

    if (sum === original) {
        console.log("Armstrong Number");
    } else {
        console.log("Not an Armstrong Number");
    }
};

checkArmstrong(153);

//Square number Anonymous function without input with return.
let getSquare = function () {
    let num = 8;

    return num * num;
};

console.log(getSquare());

//factorial Anonymous function without input with return.
let getFactorial = function () {
    let num = 5;
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
};

console.log(getFactorial());

//sum of digits Anonymous function without input with return.
let getSumOfDigits = function () {
    let num = 5832;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num / 10);
    }

    return sum;
};

console.log(getSumOfDigits());

//.cube of a number Anonymous function with input with return.
let getCube = function (num) {
    return num * num * num;
};

console.log(getCube(5));

//Reverse a number using Anonymous function with input with return.
let reverseNumber = function (num) {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reverse;
};

console.log(reverseNumber(12345));

//.Strong Number using Anonymous function with input with return.
let checkStrong = function (num) {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        let fact = 1;

        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }

        sum = sum + fact;
        num = Math.floor(num / 10);
    }

    if (sum === original) {
        return "Strong Number";
    } else {
        return "Not a Strong Number";
    }
};

console.log(checkStrong(145));