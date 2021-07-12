$().ready(function(){
    $.getJSON( "https://api.eva.pingutil.com/email?email=test@mail7.io", function( data ) {
    console.log(data);
    $("#text").html(data["status"]);
  });
});
