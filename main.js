'use strict';

$(document).ready(function(){

  var shipOne = ['aOne', 'bOne', 'cOne'];
  var shipTwo = ['aTwo', 'bTwo', 'cTwo'];
  var shipThree = ['aThree', 'aFour', 'aFive'];
  var shipFour = ['bThree', 'bFour', 'bFive'];
  var shipFive = ['dOne', 'dTwo', 'dThree'];
  var shipSix = ['eOne', 'eTwo', 'eThree'];
  var shipSeven = ['cFour', 'dFour', 'eFour'];
  var shipEight = ['cFive', 'dFive', 'eFive'];

  var missileCount = 15;

  var availableShips = [
  shipOne, shipTwo, shipThree, shipFour,
  shipFive, shipSix, shipSeven, shipEight
  ];

  var allShips = [];

  var randomShip = function() {
    for (var i = 0; i < 3; i++) {
      var findShip = Math.floor(Math.random() * (7 - 0) + 0);
      allShips.push(availableShips.splice(findShip, 1));
      }
  }

  randomShip();


  $('.shipLocation').on('click', function(){
    for (var i = 0; i < 3; i++) {
      console.log('SHIP', allShips[i][0]);
      var found = allShips[i][0].indexOf(this.id);
      if (found > -1) {
        console.log('FOUND INDEX', found);
        $(this).removeClass('miss');
        $(this).addClass('hit');
        $(this).off('click');
        allShips[i][0].splice(found, 1);
        console.log('THIS', this);
        break;
      } else {
        $(this).addClass('miss');
        $(this).off('click');
        console.log('MISS');
      }
    }
    missileCount--;
    var missilesFired = $('#missiles').text(`${parseInt($('#missiles').text())-1}`);
    if (missileCount === 0) {
       alert('Game Over! Try Again');
       $('.board').remove();
       $('.replay').css('display', 'inline');
    }
    sunkShip();
    winGame();
  });

  var sunkShip = function() {
    console.log(allShips);
    for (var i = 0; i < 3; i++) {
      if (allShips[i][0].length === 0)  {
        alert('You sunk my Battleship!');
        allShips[i][0].push('sunk');
      }
    }
  }
  var winGame = function() {
    if (allShips[0][0][0] === 'sunk' && allShips[1][0][0] === 'sunk' && allShips[2][0][0] === 'sunk') {
      alert('You won Battleship!');
      $('.board').remove();
      $('.replay').css('display', 'inline');
    }
  }
});
