

$(document).ready(function() {

  $("#submit").click(function() {
    var ailment = $("#ailment").val();
    alert(ailment);
    $("#results").append("<li>" + ailment + "</li>");
  });



});
