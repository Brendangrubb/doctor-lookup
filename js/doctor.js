var apiKey = require('./../.env').apiKey;


function Doctor() {
}



Doctor.prototype.getNames = function (ailment) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    console.log(result);
    for (i = 0; i < result.data.length; i++)
    {
      $("#results").append("<li>Doctor number " + (i + 1) + " is " + result.data[i].profile.first_name + " " + result.data[i].profile.last_name + "</li>");
    }

  })
  .fail(function(error){
    console.log("fail");
  });

};



exports.doctorModule = Doctor;
