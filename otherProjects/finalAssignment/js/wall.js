$(document).ready(function(){
  
$.getJSON("jsonDatabase/wall.json",function(data){

    console.dir(data);
    
    var html = "";
    $.each(item.album, function(data, item){
        
     html += '<div class="col-md-3">'+
             '<img class="albumImage" src=""' + item.albumImage + '"/>' + "<br>" +
             '<div class="albumArtist">' + "<strong>Artist: </strong>" + item.artist + '</div>'+
             '<div class="albumYear">' + "<strong>Year: </strong>" + item.year + '</div>'+
             '<div class="albumGenre">' + "<strong>Genre: </strong>" + item.genre + '</div>'
         
      
     html += '</div>'; //col-md-3
        
       
    })//each album
  
   $("#albumData").append(html);
//end record data
    
    var device = "";
    
     $.each(item.equipment, function(equipment, item){
     device += '<div class="col-md-3">'+
             '<img class="deviceImage" src=""' + item.deviceImage + '"/>' + "<br>" +
             '<div class="deviceName">' + "<strong>Name: </strong>" + item.device + '</div>'+
             '<div class="deviceType">' + "<strong>Device: </strong>" + item.type + '</div>'+
             '<div class="deviceCompany">' + "<strong>Company: </strong>" + item.comapny + '</div>'+
             '<div class="devicePrice">' + "<strong>Price: </strong>" + item.price + '</div>'
         
      
     device += '</div>'; //col-md-3
        
       
    })//each device 
      $("#deviceData").append(device);   
 
    
    
})
  // closes getJSON  
})

