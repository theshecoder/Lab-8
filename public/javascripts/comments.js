$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val(),Photo:$("#Photo").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);

var url = "comment";
$.ajax({
  url:url,
  type: "POST",
  data: jobj,
  contentType: "application/json; charset=utf-8",
  success: function(data,textStatus) {
      $("#done").html(textStatus);
  }
})
    });

$("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          // everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
//           everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + " -- Photo: <img src=&quot;" + com.Photo + "&quot; style=&quot;width:300px;height:auto;&quot;>
// </li>";
            var photoString = "<img src=" + com.Photo + " style=&quot;width:100px;height:auto;&quot;>";
            console.log(photoString); 
            everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + " -- Photo: " + photoString + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })

});
