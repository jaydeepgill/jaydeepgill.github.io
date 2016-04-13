$(document).ready(function(){

$.getJSON("jsonDatabase/wall.json",function(data){

    console.dir(data);

    var html = "";
    $.each(data.albums, function(index, item){

     html += '<div class="col-md-3 col-sm-12">'+
             '<img class="albumImage" src="' + item.albumImage + '"/>' + "<br>" +
             '<div class="albumArtist">' + "<strong>Name: </strong>" + item.artist + '</div>'+
             '<div class="albumTitle">' + "<strong>Company: </strong>" + item.albumTitle + '</div>'+
               '<div class="albumYear">' + "<strong>Year: </strong>" + item.year + '</div>'


     html += '<br>' + '</div>'; //col-md-3

   })//each console

   $("#albumData").append(html);
//end record data

    var device = "";

     $.each(data.devices, function(ind, item){
     device += '<div class="col-md-4 col-sm-12">'+
             '<img class="deviceImage" src="' + item.deviceImage + '"/>' + "<br>" +
             '<div class="deviceName">' + "<strong>Product: </strong>" + item.device + '</div>'+
             '<div class="deviceType">' + "<strong>Device: </strong>" + item.type + '</div>'+
             '<div class="deviceCompany">' + "<strong>Company: </strong>" + item.company + '</div>'+
             '<div class="devicePrice">' + "<strong>Price: </strong>" + item.price + '</div>'


     device += '<br>' + '</div>'; //col-md-3

    })//each device
      $("#deviceData").append(device);



})
  // closes getJSON
})
