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

function task1() {
    taskTitle(1);

    var number = {
        units: null,
        dozens: null,
        hundreds: null,

        parse: function (n) {
            var data = ("" + n).split("").reverse().join("");
            if (data.length < 1 || data.length > 3) {
                var err = "Число должно быть в диапозоне от 0 до 999";
                log(err);
                console.log(err);
                return this;
            } else {
                switch (data.length) {
                    case 3:
                        this.hundreds = data[2];
                    case 2:
                        this.dozens = data[1];
                    case 1:
                        this.units = data[0];
                }
                return this;
            }
        },

        toString: function () {
            return "units: " + this.units + ", dozens: " + this.dozens + ", hundreds: " + this.hundreds
        }
    };

    var n = number.parse(document.getElementById('task1-input').value)

    console.log(n);
    log(n);
}

function task2() {
    taskTitle(2);

    var game = {
        count: 1,
        gameIsRunning: true,
        answers: [],
        success: false,

        random: function (min, max) {
            return Math.round(min + Math.random() * (max - min));
        },

        checkAnswer: function (random) {
            var answer = +prompt('Укажите число (-1 – закончить игру)');
            this.answers.push(answer);

            while (this.gameIsRunning) {
                if (answer === -1) {
                    this.gameIsRunning = false;
                } else if (answer == 0 && isNaN(answer)) {
                    alert('Вы не ввели число!\nВыход.');
                    this.gameIsRunning = false;
                } else if (answer == random) {
                    alert('Поздравляем, вы угадали число!');
                    this.success = true;
                    this.gameIsRunning = false;
                } else {
                    this.count++;
                    answer = +prompt('Не угадали.\nУкажите другое чило(-1 – закончить игру)\nПопытка:' + this.count);
                    this.answers.push(answer);
                }
            }

            log(this.getStatistic());
            console.log(this.getStatistic());
        },

        getStatistic: function () {
            var line = this.success ? "Успех!" : "Неудача!";
            line += " Попыток: " + this.count + ", история ответов: ";
            for (var k in this.answers) {
                line += (+k + 1) + "=" + this.answers[k] + "; ";
            }
            return line;
        }
    };

    game.checkAnswer(game.random(1, 3));
}