$(document).ready(function(){

$("#getClients").on("click", function(){

var url = "http://jaydeep101.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"

$.getJSON(url, function(data){
var html = "<table class='table table-hover table-striped'>" +
    "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";
    $.each(data, function(index, item){
    //$("#data").append(item.name);
    html += "<tr>"+
    "<td>" + item.name + "</td>"+
    "<td>" + item.email + "</td>" +
    "<td>" + item.company + "</td>" +
    "</tr>";

    })

    html += "</table>";
    $("#data").append(html);

//JSON ends
})
//click function ends
})
//document ready ends
})
