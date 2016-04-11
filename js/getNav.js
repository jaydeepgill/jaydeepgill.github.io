$.get("partials/nav.html", function(data){

    $(document).ready(function(){

    $(".container").hide();
    $(".container").prepend(data);
    $(".container").fadeIn(800); 

   
    })


})

