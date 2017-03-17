var apiKey = require('./../.env').apiKey;


function Doctor() {
}



Doctor.prototype.getNames = function (ailment) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    console.log(result.data[1].ratings);
    console.log(result.data[0].ratings[0].image_url_small);

    for (i = 0; i < result.data.length; i++)
    {
      if (result.data[i].ratings.length === 0) {
        var rating_image = "No rating available";
      } else {
        var rating_image = "<img src='" + result.data[i].ratings[0].image_url_small + "'>";
      }

      $("#results").append
      (
        "<tr>" +
          "<td>" + "<img src='" + result.data[i].profile.image_url + "'>" + "</td>" +
          "<td>" + result.data[i].profile.first_name + result.data[i].profile.last_name + ", " + result.data[i].profile.title + "</td>" +
          "<td>" + rating_image + "</td>" +
        "</tr>"
      );
    }

  })
  .fail(function(error){
    console.log("fail");
  });

};



exports.doctorModule = Doctor;
