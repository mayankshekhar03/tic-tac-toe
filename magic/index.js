//mode
var mode = '';
//symbol
var p1   = '';
var p2   = '';
//current status of board
var game = [];
//winning array
var win  = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

$(document).ready(function () {
    chooseMode();
    chooseSymbol();
});

function chooseMode() {
    $('#single').click(function () {
        mode = 'single';
        $('#mode').css('display', 'none');
    });
    $('#multi').click(function () {
        mode = 'multi';
        $('#mode').css('display', 'none');
    });
};

function chooseSymbol() {
    $('#back').click(function(){
        symbol = '';
        mode   = '';
        $('#mode').css('display', 'block');
    });
};