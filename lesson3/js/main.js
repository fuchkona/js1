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

function taskTitle(n) {
    logLine();
    log("Задание №" + n);
}

function randomNum(min, max) {
    if (isNaN(min) || isNaN(max)) return NaN;
    if (min > max) {
        min += max;
        max = (max - min) * -1;
        min -= max;
    }
    return Math.floor(min + Math.random() * (max - min + 1));
}

function task1(n) {
    taskTitle(1);
    // алгоритм поиска - Решето Эратосфена, использование for и while
    var line = "Простые числа, в диапозоне от 0 до " + n + ": ";
    if (n >= 2) {
        var data = [];
        var i;

        i = 2;
        while (i <= n) {
            data[i] = 1;
            i++;
        }
        i = 2;
        while (i <= n) {
            if (data[i] === 1) {
                for (var j = 2; i * j <= n; j++) {
                    data[i * j] = 0;
                }
            }
            i++;
        }
        for (i = 2; i <= n; i++) {
            if (data[i] === 1) {
                line += i + " ";
            }
        }
    }
    log(line);
}

function parity(n) {
    if (isNaN(n)) return NaN;
    if (n === 0) return "это ноль";
    if (n % 2 === 0) return "четное число";
    return "нечетное число";
}

function task2(n) {
    taskTitle(2);

    var i = 0;
    do {
        log(i + " - " + parity(i));
        i++;
    } while (i <= n)
}

function task3(n) {
    taskTitle(3);
    for (var i = 0; i <= n; log(i++)) {
    }
}

function task4(n) {
    taskTitle(4);
    for (var i = 1; i <= n; i++) {
        var line = "";
        for (var j = 1; j <= i; j++) {
            line += "x";
        }
        log(line);
        console.log(line);
    }
}