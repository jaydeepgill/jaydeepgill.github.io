$(document).ready(function () {

    var circleOrEx = "o"; // who gets first turn, right now circle goes first
    var isGameInProgress = true; // when the document loads, the tictactoe board is an active game
    var winningCombos = { // the game board is a series of nine square boxes, but since this is an array, the values for earch box is 0 to 8.  these values outline the winning combinations starting from each possible square on the board.  the board is writen out like this:

        //0 | 1 | 2  
        //---------  
        //3 | 4 | 5
        //---------
        //6 | 7 | 8

        0: [ //0 is key (winning combinations starting from the top left square)
      [1, 2], //if the user enters in three of the same values across the top three squares, they win
      [3, 6], //if the user enters in three of the same values down the far left column, they win
      [4, 8] //if the user enters in three of the same values  diagonally from the top left to bottom                       right, they win
    ],
        1: [ //(winning combinations starting from the top middle square)
      [0, 2], //if the user enters in three of the same values across the top three squares, they win
      [4, 7] //if the user enters in three of the same values down the middle column, they win
    ], //there are no diagonal winning combinations for values 1, 4, 7 
        2: [ //(winning combinations starting from the top right square)
      [0, 1], //if the user enters in three of the same values across the top three squares, they win
      [5, 8], //if the user enters in three of the same values down the far right column, they win
      [4, 6] //if the user enters in three of the same values  diagonally from the top right to bottom                       left, they win
    ],
        3: [ //(winning combinations starting at the middle square on the far left column )
      [0, 6], //if the user enters in three of the same values down the far left column, they win
      [4, 5] //if the user enters in three of the same values across the middle row, they win
    ],
        4: [ //(winning combinations starting at the center square)
      [0, 8],
      [2, 6], //if the user enters in three of the same values  diagonally from the top right to bottom                       left, they win
      [1, 7], //if the user enters in three of the same values down the middle column, they win
      [3, 5] // if the user enters in three of the same values across the middle row, they win
    ],
        5: [ //(winning combinations starting from the middle square in the far right column)
      [2, 8], //if the user enters in three of the same values down the far right column, they win
      [3, 4] // if the user enters in three of the same values across the middle row, they win
    ],
        6: [ //(winning combinations starting from the bottom left square)
      [0, 3], //if the user enters in three of the same values down the far left column, they win
      [2, 4], //if the user enters in three of the same values  diagonally from the top left to bottom                       right, they win
      [7, 8] //if the user enters in three of the same values across the bottom three squares, they win
    ],
        7: [ //(winning combinations starting from the bottom middle square)
      [1, 4], //if the user enters in three of the same values down the middle column, they win
      [6, 8] //if the user enters in three of the same values across the bottom three squares, they win
    ],
        8: [ //(winning combinations starting from the bottom right square)
      [0, 4], //if the user enters in three of the same values  diagonally from the bottom right to the top               left, they win
      [2, 5], //if the user enters in three of the same values down the far right column, they win
      [6, 7] //if the user enters in three of the same values across the bottom three squares, they win
    ]
    };

    // when the user clicks on the board, the function runs, and the game is in progress
    $("#board").find("div").on("click", function () {

        if (isGameInProgress && $(this).hasClass("empty")) { /// within the #board remove the empty class and add either an X or an O value to the square when it is is clicked
            $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

            checkIfWon($(this).index(), circleOrEx); //function checks to see who won, and whoever lost goes first next game

            if (circleOrEx === "o") { // when circle plays
                circleOrEx = "x"; // next it's X's turn
                alert("Now it's X's turn");
            } else {
                circleOrEx = "o"; // X just played their turn, now it is circle's turn
                alert("Now it's O's turn");
            }
        }

    });

    // once you click the button with the #newGame, run the function
    $("#newGame").on("click", function () {

        var boardSquares = $("#board").find("div"); //boardSquares now becomes every div element within #board, which is each of the nine blank squares that make up the tic tac toe game
        var firstEmptyMemorySquare = $(".container").find(".nine").filter(function () { //returns a value for firstEmptyMemorySquare if the function passes these requirements (explain a filter)
            return $.trim($(this).text()) === "" && $(this).children().length === 0;
        }).not("#board").first();

        if (firstEmptyMemorySquare.length == 1) { //placing a previously played game in an EmptyMemorySquare
            firstEmptyMemorySquare.html($("#board").html());
        } else {
            $(".container").find(".nine").not("#board").empty();
            $(".container").find(".nine").first().html($("#board").html());
        }

        //deletes anything in the empty class to games that are in progress
        boardSquares.each(function () {
            $(this).addClass("empty").empty();
        })
        isGameInProgress = true;
    })

    //checks if a player won. chosenSquare is the final value in a winning combination; the possible values for chosenSquare is [0] - [8] what are the possible values of the paramaters
    function checkIfWon(chosenSquare, winningPlayer) {

        var mulitArr = winningCombos[chosenSquare];
        var playerWon;

        for (var i = 0; i < mulitArr.length; i++) { //Explain this nested for loop
            playerWon = true;
            for (var j = 0; j < mulitArr[i].length; j++) {
                if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Explain this condition
                    playerWon = false;
                }
            }

            if (playerWon) { //remaining lines affect the board when a player enters a winning combination
                if (winningPlayer == 'x') {
                    // Grab the current win count
                    var xWinCount = $('#xWinCount').val();

                    // Increment the count
                    xWinCount++;

                    // Assign the new count
                    $('#xWinCount').val(xWinCount);
                }

                for (var j = 0; j < mulitArr[i].length; j++) {
                    $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //makes the first two inputs of the winning comination the color green
                }
                $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green"); //makes the last         input of the winning combination (chosenSquare) the color green
                alert("Winner is " + circleOrEx.toUpperCase() + "!"); //alert "Winner is X" or "Winner is O"

                isGameInProgress = false; //since a player has won, the game is not longer in progress
                return false; //this exits the loop


            }
        }
    }



})