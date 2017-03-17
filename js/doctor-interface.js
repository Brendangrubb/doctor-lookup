var Doctor = require("./../js/doctor.js").doctorModule;

$(document).ready(function() {
  var doctor = new Doctor();

  $("#submit").click(function() {
    var ailment = $("#ailment").val();

    doctor.getNames(ailment);
  });



});
