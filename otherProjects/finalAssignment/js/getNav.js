$.get("partials/nav.html", function(data){

    $(document).ready(function(){

    $(".container-fluid").prepend(data);
    $(".container-fluid").fadeIn(800); 

   
    })


})

