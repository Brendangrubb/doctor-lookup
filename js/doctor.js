var apiKey = require('./../.env').apiKey;

function Doctor() {}

Doctor.prototype.getNames = function (ailment, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    displayDoctors(result);
  }).fail(function(error){
    $('#results').append(  "<tr>" +  "<td></td><td>Something went wrong, please try again</td>" + "</tr>");
  });
};

exports.doctorModule = Doctor;
