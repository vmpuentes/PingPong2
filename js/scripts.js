//*business Logic
function pingPong(input) {
  var output = [];
  for (var i = 1; i <= input ; i++) {
    if (i % 15 === 0) {
      output.push("pingpong");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else {
      output.push(i);
    }
  }
  return output;
}

//User Logic
$(document).ready(function() {
  $("#ping").submit(function(event) {
    $("ul.output").empty();
    event.preventDefault();
    var initialInput = parseInt($("#userInput").val());
    $("#userInput").val("")
    console.log(initialInput);
    var finalResult = pingPong(initialInput);
    finalResult.forEach(function(item) {
      $("ul.output").append("<li>" + item + "</li>");
    })
  });
});
