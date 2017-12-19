"use strict";

function chessDesk() {
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');


    tbody.appendChild(getTrLetters());

    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            if (j > 0 && j < 9) {
                if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
                    td.className += ' black';
                }
                td.className += ' bordered';
                switch (i) {
                    case 0:
                        switch (j) {
                            case 1:
                            case 8:
                                td.appendChild(getImg('rook', true));
                                break;
                            case 2:
                            case 7:
                                td.appendChild(getImg('knight', true));
                                break;
                            case 3:
                            case 6:
                                td.appendChild(getImg('bishop', true));
                                break;
                            case 4:
                                td.appendChild(getImg('queen', true));
                                break;
                            case 5:
                                td.appendChild(getImg('king', true));
                                break;
                        }
                        break;
                    case 1:
                        td.appendChild(getImg('pawn', true));
                        break;
                    case 6:
                        td.appendChild(getImg('pawn', false));
                        break;
                    case 7:
                        switch (j) {
                            case 1:
                            case 8:
                                td.appendChild(getImg('rook', false));
                                break;
                            case 2:
                            case 7:
                                td.appendChild(getImg('knight', false));
                                break;
                            case 3:
                            case 6:
                                td.appendChild(getImg('bishop', false));
                                break;
                            case 5:
                                td.appendChild(getImg('queen', false));
                                break;
                            case 4:
                                td.appendChild(getImg('king', false));
                                break;
                        }
                        break;
                }
            } else {
                var h2 = document.createElement('h2');
                h2.innerText = i + 1;
                td.appendChild(h2);
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tbody.appendChild(getTrLetters());

    table.appendChild(tbody);
    body.insertBefore(table, body.firstChild);
}

function getTrLetters() {
    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    var trLetters = document.createElement('tr');
    for (var i = 0; i < 10; i++) {
        var tdLetters = document.createElement('td');
        var h2 = document.createElement('h2');
        h2.innerText = letters[i];
        tdLetters.appendChild(h2);
        trLetters.appendChild(tdLetters);
    }
    return trLetters;
}

function getImg(chess, isBlack) {
    var figure = document.createElement('img');
    figure.src = 'img/' + (isBlack ? 'b' : 'w') + '_' + chess + '.png';
    return figure;
}

chessDesk();