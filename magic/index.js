//mode
var mode = '';
//symbol
var p1s   = '';
var p2s   = '';
//current status of board
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//with ai
var p1 = 'P';
var p2 = 'C';
//score
var round = 0;
var s1 = 0;
var s2 = 0;

$(document).ready(function () {
    $('#pl1').hide();
    $('#pl2').hide();
    $('#reset').click(function(){
        location.reload();
    });
    chooseMode();
    chooseSymbol();
    $('#symbol').one('click', function(){
        if (mode === 'single'){
            //withComp();
        }else if (mode === 'multi') {
            nextRoundMulti();
        }else if (mode === ''){
            alert('Choose mode by refreshing the page');
        }
    });
});

function chooseMode() {
    $('#single').click(function () {
        mode = 'single';
        $('#mode').hide();
    });
    $('#multi').click(function () {
        mode = 'multi';
        $('#mode').hide();
    });
}

function chooseSymbol() {
    $('#back').click(function(){
        p1s = '';
        p2s = '';
        mode   = '';
        $('#mode').show();
    });
    $('#x').click(function(){
        p1s = 'X';
        p2s = 'O';
        $('#symbol').hide();
    });
    
    $('#o').click(function(){
        p1s = 'O';
        p2s = 'X';
        $('#symbol').hide();
    });
}

function nextRoundMulti() {
    round += 1;
    if (round % 2 !== 0) {
        $('#pl1').show();
        $('#pl2').hide();
        $('.sq').unbind().click(function() {  //this unbind function got this working
            $(this).text(p1s);
            updateBoard(this.id, p1s);
            withFriend(p1s);
        });
    } else {
        $('#pl2').show();
        $('#pl1').hide();
        $('.sq').unbind().click(function() {
            $(this).text(p2s);
            updateBoard(this.id, p2s);
            withFriend(p2s);
        });
    }
    
}

function withFriend(player) {
    if (winning(board, player)){
        if (player === p1s) {
            setTimeout(function() {
                s1 += 10;
                $('#s1').text('Player 1: ' + s1);
                alert('Player 1 won!');
                resetMulti();
            }, 500);
        } else if(player === p2s) {
            setTimeout(function() {
                s2 += 10;
                $('#s2').text('Player 2: ' + s2);
                alert('Player 2 won!');
                resetMulti();
            }, 500);
        }
    } else if (avail(board).length === 0) {
        alert("It's a tie!");
        resetMulti();
    } else {
        nextRoundMulti();
    }
}

function resetMulti() {
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $('.sq, span').html('&nbsp;');
    nextRoundMulti();
}
    
function avail(reboard) {
  return reboard.filter(s => s != "X" && s != "O");
}

function winning(board, player) {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    return true;
  } else {
    return false;
  }
}
    
function updateBoard(id, p) {
    switch(id){
        case 'one':
            board[0] = p;
            break;
        case 'two':
            board[1] = p;
            break;
        case 'three':
            board[2] = p;
            break;
        case 'four':
            board[3] = p;
            break;
        case 'five':
            board[4] = p;
            break;
        case 'six':
            board[5] = p;
            break;
        case 'seven':
            board[6] = p;
            break;
        case 'eight':
            board[7] = p;
            break;
        case 'nine':
            board[8] = p;
            break;
    }
}