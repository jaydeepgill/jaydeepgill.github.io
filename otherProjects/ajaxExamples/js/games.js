$(document).ready(function(){
$.getJSON("jsonDatabase/games.json",function(data){

    console.dir(data);

    var html = "";
    $.each(data, function(index, item){
     html += '<div class="col-md-3">'+
             '<img class="movieImage" src="' + item.image + '"/>' + "<br>" +
             '<div class="movieYear">' + "<strong>Year: </strong>" + item.year + '</div>'+
             '<div class="movieTitle">' + "<strong>Title: </strong>" + item.title + '</div>'+
             '<div class="movieCompany">' + "<strong>Company: </strong>" + item.director + '</div>'+
             '<div class="commentContainer">';
        //ind = index; i=item
         $.each(item.comments, function(ind, i){
         html+= '<div class="renterName">' + i.username + '</div>' +
        '<div class="renterStars">';

            var numStars= Number(i.stars);
             for (var i=1; i<=10; i++){
             if (i <= numStars){
             html+='<img src="images/star.png"/>';
             }
                 else{
                 html+='<img src="images/emptyStar.png"/>';
                 }
             }
             html+='</div>'; //end Stars
         })

     html += '</div>'+ '<strong>Yes, I agree with this choice </strong> ' + "<input id='agree' name='agree' class='agree'  type='checkbox' value='' />" + "</li>" + "<br><br>" +
              '</div>'; //col-md-4


    })//each game

   $("#movieData").append(html);


    // closes getJSON
})
//when compare button is clicked
$("#compare").on("click", function(){
    //$('.agree:checked') is the number of checkboxes the user checks
    //whereas, var choice is the percentage of agreed upon choices
    var choice = ($('.agree:checked').length / 8) * 100;
    alert("You agree with " + $('.agree:checked').length + " of the choices," + " which is "+ choice+ "%" );
});


//closes document.ready
})
