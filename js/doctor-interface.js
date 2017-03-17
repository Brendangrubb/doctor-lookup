var Doctor = require("./../js/doctor.js").doctorModule;

function displayDoctors(result) {

  for (i = 0; i < result.data.length; i++)
  {
    console.log(result.data[i]);
    //star rating image parser
    if (result.data[i].ratings.length === 0 || result.data[i].ratings[0] === 'undefined') {
      var rating_image = "No rating available";
    } else {
      var rating_image = "<img src='" + result.data[i].ratings[0].image_url_small + "' alt = 'rating'>";
    }
    //new patient parser
    if (result.data[i].practices[0].accepts_new_patients === true) {
      var new_patients = "Absolutely!";
    } else {
      var new_patients = "Not at the moment.";
    }
    //website image parser
    if (result.data[i].practices[0].website === undefined) {
      var website = "no website given...google them!";
    } else {
      var website = "<a href='" + result.data[i].practices[0].website + "'>" + result.data[i].practices[0].website + "</a>";
    }
    //phone number parser
    var raw_phone = result.data[i].practices[0].phones[0].number
    var phone_number = "(" + raw_phone.substr(0,3) + ")" + raw_phone.substr(3,3) + "-" + raw_phone.substr(6,4);
    //add data to form
    $("#results").append
    (
      "<tr>" +
        "<td>" + "<img src='" + result.data[i].profile.image_url + "' alt= 'Dr. " + result.data[i].profile.last_name + "'>" + "</td>" +
        "<td>" + result.data[i].profile.first_name + result.data[i].profile.last_name + ", " + result.data[i].profile.title + "</td>" +
        "<td>" + rating_image + "</td>" +
        "<td>" + new_patients + "</td>" +
        "<td>" + phone_number + "</td>" +
        "<td>" + website + "</td>" +
      "</tr>"
    );
  //end for loop
  }

}

$(document).ready(function() {
  var doctor = new Doctor();

  $("#submit").click(function() {
    var ailment = $("#ailment").val();
    $("#results").empty();

    doctor.getNames(ailment, displayDoctors);
  });

});
