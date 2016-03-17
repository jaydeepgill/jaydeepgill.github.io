$(document).ready(function () {

    $(".hide-name").hide();
    $(".hide-address").hide();
    //this class show when alert appears
    //Made it red with CSS
    var price;
    $("#myButton").on("click", function () {
        //setting variables for id's in HTML
        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextArea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='gender']:checked").val();
        var myCheckbox = $("[name='vehicle']:checked").val();

        var myCheckbox = $("input[name='vehicle']:checked").map(function () {
            return this.value;
        }).get().join(", ");
         //user buy one, price is $400
        if ($('#mySelect').val() === '1') {
            price = 400;
        }
        //user buy two, price is $800
        if ($('#mySelect').val() === '2') {
            price = 800;
        }
        //user buy three, price is $1200
        if ($('#mySelect').val() === '3') {
            price = 1200;
        }
        //user buy four, price is $1600
        if ($('#mySelect').val() === '4') {
            price = 1600;
        }
        //user buy five, price is $2000
        if ($('#mySelect').val() === '5') {
            price = 2000;
        }
        //user buy six, price is $2400
        if ($('#mySelect').val() === '6') {
            price = 2400;
        }
        //user buy seven, price is $2800
        if ($('#mySelect').val() === '7') {
            price = 2800;
        }
        //user buys eight, price is $3200
        if ($('#mySelect').val() === '8') {
            price = 3200;
        }
        //user buys nine, price is $3600
        if ($('#mySelect').val() === '9') {
            price = 3600;
        }
        //user buys ten, price is $4000
        if ($('#mySelect').val() === '10') {
            price = 4000;
        }

        //if user selects HDMI connectors add $25 to price
        if ($('input[value=HDMI]').prop("checked")) {
            price = price + 25;
        }

        if ($('input[value=PS4-Controller]').prop("checked")) {
            price = price + 25;
        }

        if ($('input[value=USB-hub]').prop("checked")) {
            price = price + 25;
        }


        if ($('input[value=PS4-Remote-Control]' && 'input[value=PS4-Headphones]').prop("checked")) {
            price = price + 0;
        }
        if ($('input[PS4-Remote-Control]' && 'input[value=Controller-Keyboard]').prop("checked")) {
            price = price + 20;
        }
        if ($('input[value=PS4-Headphones]' && 'input[value=Controller-Keyboard]').prop("checked")) {
            price = price + 20;
        }

       


        //adding the value of the variables to the LOG section of the page
    
        $("#log").append("<br><br>Price: $" + price);
        $("#log").append("<br>Name: " + myInput);
        $("#log").append("<br>Delivery Address: " + myTextarea);
        $("#log").append("<br> Quantity ordered: " + mySelect);
        $("#log").append("<br> Practical Accessories: " + myRadio);
        $("#log").append("<br> Leisure Accessories added: " + myCheckbox);
        $("#log").append("<br><br>");


        //When user chhoses to click the 'chain order button' alert 
        //the user can continue and add the following line at the bottom of the previous Receipt
        $("#chainButton").on("click", function () {
            $("#log").append("process the previous order, in addition to the following:");
            alert("Now you may complete your next order");
        });




        //if user leaves mySingleLineText blank, return the alert and highlight mySingleLineText red  
        if (myInput === "") {
            alert("You forget to enter your name");

            $("#mySingleLineText").css("background-color", "#EE6363");
            $(".hide-name").show();
        }

        //if user leaves myTextArea blank, return the alert and highlight myTextArea red  
        if (myTextarea === "") {
            alert("You forgot to enter a delivery address");

            $("#myTextArea").css("background-color", "#EE6363");
            $(".hide-address").show();
        }
        //ends click function
    });

    //focus function changes the background color of mySingleLineText to a light blue
    $("#mySingleLineText").on("focus", function () {
            $(this).css("background-color", "#e6f3f7");
        })
        //blur function returns the background color of mySingleLineText to white
        .on("blur", function () {
            $(this).css("background-color", "white");
        });

    //focus function changes the background color of myTextArea to a light blue
    $("#myTextArea").on("focus", function () {
        $(this).css("background-color", "#e6f3f7");
    })

    //blur function returns the background color of myTextArea to white
    .on("blur", function () {
        $(this).css("background-color", "white");
    });

    $("#mySelect").on("change", function () {
        //if user enters the '+10' option, return this alert
        if ($('#mySelect').val() === '10') {

            alert("You can't be serious, but if you are please place atleast two orders that add to the desired amount. Place your first order, then fill out your second order and remember to click the 'Chain Order box'");
        }
        //otherwise user enters a value <=9, so return this messsage
        else {
            $("#mySelectMessage").html("How bout another one?...please?!");
        }
        //ends mySelect change function
    });

    //changes button color to green when mouseover 
    $("#myButton").on("mouseenter", function () {
            $(this).text("You're Done!");
            $(this).css("background-color", "#61B329");
        })
    //changes button color to white when mouseleaves
        .on("mouseleave", function () {
            $(this).text("Click to Order");
            $(this).css("background-color", "white");

            //ends button mouseover and mouseleave functions
        });



    //ends document ready function
});