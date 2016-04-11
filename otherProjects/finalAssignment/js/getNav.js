$.get("partials/nav.html", function(data){

    $(document).ready(function(){ 
       $(".container-fluid").hide();
    $(".container-fluid").prepend(data);
        $(".container-fluid").show(); 


   
    })


});

