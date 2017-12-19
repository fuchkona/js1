"use strict";

var fahrenheit_in = document.getElementById("fahrenheit-in");
var fahrenheit_btn = document.getElementById("fahrenheit-btn");
var fahrenheit_out = document.getElementById("fahrenheit-out");

function CelToFahr(cel) {
    return (9 / 5) * cel + 32;
}

function log(string) {
    var logger = document.getElementById("log");
    var li = document.createElement('li');
    li.innerText = string;
    logger.appendChild(li);
}

fahrenheit_btn.addEventListener("click", function () {
    var cel = fahrenheit_in.value;
    var far = CelToFahr(cel);
    fahrenheit_out.innerHTML = far;
    log("Конвертация Цельсия " + cel + " в Фаренгейт " + far);
});

function variables() {
    var admin;
    var name = "Василий";
    admin = name;
    log("admin = " + admin)
}

var var_btn = document.getElementById("var-btn");

var_btn.addEventListener('click', variables);

var dop_1_btn = document.getElementById("dop-1-btn");

dop_1_btn.addEventListener('click', function () {
   var solution = 1000 + "108";
    log(solution + " type: " + typeof solution);
});