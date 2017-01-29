'use strict';

$(document).ready(function(){
  // made variables to creates the ships
  var shipOne = ['aOne', 'bOne', 'cOne'];
  var shipTwo = ['aTwo', 'bTwo', 'cTwo'];
  var shipThree = ['aThree', 'aFour', 'aFive'];
  var shipFour = ['bThree', 'bFour', 'bFive'];
  var shipFive = ['dOne', 'dTwo', 'dThree'];
  var shipSix = ['eOne', 'eTwo', 'eThree'];
  var shipSeven = ['cFour', 'dFour', 'eFour'];
  var shipEight = ['cFive', 'dFive', 'eFive'];
  // created this so the user could see how many turns they have left
  var missileCount = 15;
  // added this late to create the order in which I wanted the alerts to go off
  var wonGame = false;
  // created an array of all the ships possible for the game
  var availableShips = [
  shipOne, shipTwo, shipThree, shipFour,
  shipFive, shipSix, shipSeven, shipEight
  ];
  // empty array to keep all of the random selected ships in
  var allShips = [];
  // ran a function to randomly select 3 ships from the availableShips array
  var randomShip = function() {
    for (var i = 0; i < 3; i++) {
      var findShip = Math.floor(Math.random() * (((7 - i) - 0) + 0));
      // removed the selected ship from the availableShips array and I
      // pushed it into the allShips array
      allShips.push(availableShips.splice(findShip, 1));
      }
  }

  randomShip();

  // created an on click function so that I can click on all of the
  // boxes. It would either be red or blue pending if the box the
  // user selected a ship that was randomly selected or not
  $('.shipLocation').on('click', function(){
    for (var i = 0; i < 3; i++) {
      // created a variable to see if the id of the clicked div
      // if it exists in the nested arrays
      var found = allShips[i][0].indexOf(this.id);
      // ran an if statement to see if the index was greater than -1 to
      // see if the clicked div is one of the arrays in allShips.
      // added the hit class if the user was right and added a miss
      // class if the user was wrong. I had to splice it to remove
      // it from the array
      if (found > -1) {
        $(this).removeClass('miss');
        $(this).addClass('hit');
        $(this).off('click');
        allShips[i][0].splice(found, 1);
        break;
      } else {
        $(this).addClass('miss');
        $(this).off('click');
      }
    }
    sunkShip();

    winGame();
    // needed to subtract the missileCount everytime the user clicked
    missileCount--;
    // had to use this variable to make the missle countdown subtract
    // made an if statement to see if the user has no more turns left
    // and the game is over
    var missilesFired = $('#missiles').text(`${parseInt($('#missiles').text())-1}`);
    if (missileCount === 0 && wonGame === false) {
       alert('Game Over! Try Again');
       $('.board').remove();
       $('.replayButton').css('display', 'inline');
    }
  });
  // called this function in the on click function so that it can alert
  // the user if they sunk a battleship
  var sunkShip = function() {
    for (var i = 0; i < 3; i++) {
      if (allShips[i][0].length === 0)  {
        alert('You sunk my Battleship!');
        allShips[i][0].push('sunk');
      }
    }
  }
  // called this fucntion in the on click function to see if the user
  // won the game
  var winGame = function() {
    if (allShips[0][0][0] === 'sunk' && allShips[1][0][0] === 'sunk' && allShips[2][0][0] === 'sunk') {
      alert('You won Battleship!');
      wonGame = true;
      $('.board').remove();
      $('.replayButton').css('display', 'inline');
    }
  }
  // used this function so that the user could replay the game
  $('.replayButton').on('click', function(){
    location.reload();
  })
});
