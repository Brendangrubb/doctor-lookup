var apiKey = require('./../.env').apiKey;


function Doctor() {
}



Doctor.prototype.getNames = function (ailment) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {

    for (i = 0; i < result.data.length; i++)
    {
      console.log(result.data[i]);

      if (result.data[i].ratings.length === 0 || result.data[i].ratings[0] === 'undefined') {
        var rating_image = "No rating available";
      } else {
        var rating_image = "<img src='" + result.data[i].ratings[0].image_url_small + "' alt = 'rating'>";
      }

      if (result.data[i].practices[0].website === undefined) {
        var website = result.data[i].practices[0].website;
      } else {
        var website = "<a href='" + result.data[i].practices[0].website + "'>" + result.data[i].practices[0].website + "</a>";
      }
      if (result.data[i].practices[0].accepts_new_patients === true) {
        var new_patients = "Yep!";
      } else {
        var new_patients = "Nope.";
      }

      $("#results").append
      (
        "<tr>" +
          "<td>" + "<img src='" + result.data[i].profile.image_url + "' alt= 'Dr. " + result.data[i].profile.last_name + "'>" + "</td>" +
          "<td>" + result.data[i].profile.first_name + result.data[i].profile.last_name + ", " + result.data[i].profile.title + "</td>" +
          "<td>" + rating_image + "</td>" +
          "<td>" + new_patients + "</td>" +
          "<td>" + website + "</td>" +
        "</tr>"
      );
    }

  })
  .fail(function(error){
    console.log("fail");
  });

};



exports.doctorModule = Doctor;
