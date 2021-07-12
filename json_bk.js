$().ready(function(){
    $.getJSON( "/lovely/data.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});
