"use strict";

function log(string) {
    var logger = document.getElementById("log");
    var li = document.createElement('li');
    li.innerText = string;
    logger.appendChild(li);
}

function logLine() {
    log("---------------------------------------------------------------------");
}

function task1() {
    logLine();
    log("Задание 1");
    var a = 1, b = 1, c, d;
    c = ++a;
    log(c); // 2
    log("c=2 потому, что префиксный инкрементный оператор сначала увеличивает " +
        "значение в переменной а на одну еденицу, а результат возвращает в " +
        "переменную с. а=2");
    d = b++;
    log(d); // 1
    log("d=1 потому, что постфиксный инкрементный оператор сначала передает " +
        "значение переменной b в переменную d, и лишь затем увеличивает " +
        "значение в переменной b на одну единицу. b=2");
    c = (2 + ++a);
    log(c); // 5
    log("c=5 потому, что префиксный инкрементный оператор сначала увеличивает " +
        "значение переменной а на одну единицу, а затем происходит сложение с " +
        "числом 2. а=3");
    d = (2 + b++);
    log(d); // 4
    log("d=4 потому, что постфиксный инкрементный оператор сначала возвращает " +
        "значание переменной b=2 складывая результат с числом 2, и лишь затем " +
        "увеличивает значение в переменной b на единицу. b=3");
    log(a); // 3
    log(b); // 3
    log("a=3 и b=3 получаются в результате выполнения инкрементных операторов " +
        "в предыдущих строках алгоритма.");
    logLine();
}

function task2() {
    logLine();
    log("Задание 2");
    var a = 2;
    var x = 1 + (a *= 2);
    log(x);
    log("x=5 потому, что сначала выполняется оператор *= умножающий значание " +
        "переменной а в 2 раза, затем прибавляется число 1");
    logLine();
}

function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function task3() {
    logLine();
    log("Задание 3");

    var a = random(-100, 100), b = random(-200, 200);
    log("a=" + a + ", b=" + b);
    if (a > 0 && b > 0) {
        log("a-b=" + (a - b));
    } else if (a < 0 && b < 0) {
        log("a*b=" + (a * b));
    } else {
        log("a+b=" + (a + b));
    }

    logLine();
}

function task4() {
    logLine();
    log("Задание 4");

    var a = random(0, 15);
    log("a=" + a);

    switch (a) {
        case 0:
            log(0);
        case 1:
            log(1);
        case 2:
            log(2);
        case 3:
            log(3);
        case 4:
            log(4);
        case 5:
            log(5);
        case 6:
            log(6);
        case 7:
            log(7);
        case 8:
            log(8);
        case 9:
            log(9);
        case 10:
            log(10);
        case 11:
            log(11);
        case 12:
            log(12);
        case 13:
            log(13);
        case 14:
            log(14);
        case 15:
            log(15);
    }

    logLine();
}

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    if (b === 0) return undefined;
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return diff(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return div(arg1, arg2);
    }
}

function task6() {
    logLine();
    log("Задание 6");
    var a = random(-100, 100), b = random(-100, 100);
    log("a=" + a + ", b=" + b);

    var operation = random(1, 4);
    switch (operation) {
        case 1:
            operation = "+";
            break;
        case 2:
            operation = "-";
            break;
        case 3:
            operation = "*";
            break;
        case 4:
            operation = "/";
            break;
    }
    log("Операция " + operation);

    log(mathOperation(a, b, operation));

    logLine();
}

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    }
}

function task8() {
    logLine();
    log("Задание 8");
    var n = random(0, 100);
    log("n=" + n);
    log(factorial(n));
    logLine();
}