$(document).ready(function() {
$.get("partials/footer.html", function(data){

    $(document).ready(function(){ 
      
    $(".container-fluid").append(data);


   
    })


})
});
