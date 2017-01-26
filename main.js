'use strict';

$(document).ready(function(){

var board = 5;
var shipNumbers = 3;
var shipLength = 3;
var sunkIndex = 0;
var missileCount = 15;
var ships =
    [0, 0, 0];
     // hits: ["", "", ""] },
    // { shipLocation: [0, 0, 0], hits: ["", "", ""] },
    // { shipLocation: [0, 0, 0], hits: ["", "", ""] }
var aOne = $('#aOne');
var aTwo = $('#aTwo');
var aThree = $('#aThree');
var aFour = $('#aFour');
var aFive = $('#aFive');
var bOne = $('#bOne');
var bTwo = $('#bTwo');
var bThree = $('#bThree');
var bFour = $('#bFour');
var bFive = $('#bFive');
var cOne = $('#cOne');
var cTwo = $('#cTwo');
var cThree = $('#cThree');
var cFour = $('#cFour');
var cFive = $('#cFive');
var dOne = $('dOne');
var dTwo = $('dTwo');
var dThree = $('dThree');
var dFour = $('dFour');
var dFive = $('dFive');
var eOne  = $('#eOne');
var eTwo  = $('#eTwo');
var eThree  = $('#eThree');
var eFour = $('#eFour');
var eFive  = $('#eFive');


var boardLocations = [
aOne, aTwo, aThree, aFour, aFive,
bOne, bTwo, bThree, bFour, bFive,
cOne, cTwo, cThree, cFour, cFive,
dOne, dTwo, dThree, dFour, dFive,
eOne, eTwo, eThree, eFour, eFive
]

$('.shipLocation').on('click', function(){
  // if ($(this).attr('class') === boardLocations[sunkIndex]) {
  $(this).addClass('hit');
    var missilesFired = $('#missiles').text(`${parseInt($('#missiles').text())-1}`);
      if ($(missilesFired === 0)) {
        alert('Game Over! Try Again');
  }

});

createShipLocation: function() {
  // var shipLocation = $('shipLocation'[i]);
  for (var i = 0; i < this.boardLocations; i++) {
    var hitLocations = Math.floor(Math.random())
  }
}


});
