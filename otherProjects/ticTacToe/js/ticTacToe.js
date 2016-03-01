$(document).ready(function() {

  var circleOrEx = "o"; // Determines who goes first
  var isGameInProgress = true; // loads game, makes it playable
  var winningCombos = { // Tic tac toe has a total of 9 squares, in this case each square has an array of 0-8. This determines all the possible winning combinations from every square on the board./
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // once the gameboard is clicked the click function runs, thus the game is activated
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// removes the blank space in the box and replaces it with the X or O value.
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //determines winner versus loser, loser goes first next time.

      if (circleOrEx === "o") { //when O plays
        circleOrEx = "x";       //then X goes
      } else {                  //when X plays
        circleOrEx = "o";       //then O goes
      }
    }

  });

  // when the new game button is clicked, the function runs
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //what is this variable
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //bonus Explain what filter does
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //what is this if statement doing?
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //Explain this each function
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //Explain this funciton, describe the parameters; what are the possible values of the paramaters
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //Explain this nested for loop
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Explain this condition
          playerWon = false;
        }
      }

      if (playerWon) { //Explain the condition and every line in the block

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //Explain this condition
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        isGameInProgress = false;
        return false; //this exits the loop
      }
    }


  }
})
