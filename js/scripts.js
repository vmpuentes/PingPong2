//*business Logic
// var player1 = (function(name){
//   this.name = player1("player1");
//   this.currentTurn = currentTurn;
//   this.score = 0;
// }
// var currentGame = new Game();
// var thePlayer = new Player();
//
// game.prototype.submit = function() {
//   this.thisPlayer.score += this.roundTotal;
// }
// Player.prototype.getScore = function() {
//   return this.score;
//
// var player1Result = 0;
//
// //business Logic
// var countToInput = function(number) {
//   var countToInitialInput = [];
//   for (var i = 1; i< number; i++) {
//     countToInitialInput[i] = (i + 1);
//   }
var currentGame = (function(initialInput, currentTurn, countToInput) {
var initialInputResult = countToInput(number);
  for (var i = 0; i < initialInputResult.length; i++) {
    if((countToInput[i] | 3) === true) {
      countToInput[i] = "ping";
    } else if ((countToInput[i] | 5) === true) {
      countToInput[i] = "pong";
    } else if ((countToInput[i] | 15) === true) {
      countToInput[i] = "pingpong";
    }
  }

return initialInputResult;

// Game.prototype.submit = function() {
//   this.thisPlayer.score += this.roundTotal;
// }
// Player.prototype.getScore = function() {
//   return this.score;
//
// var player1Result = 0;

//User Logic
$(document).ready(function() {
  $("#ping").submit(function(event) {
    event.preventDefault();
    var initialInput = parseInt$("#userInput").val();
    var runResult = $initialInputResult(initialInput).val();
    $(".submit").append("<li>" + runResult[i] + "<li>");
  });
});
});
