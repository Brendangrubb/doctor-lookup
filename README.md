# **Doctor Lookup**
#### Brendan Grubb, 3/17/2017


&nbsp;
## Description
**Doctor Lookup** is a Javascript application that demonstrates my ability to manipulate and display information gathered from API calls. I have used Node & Gulp to create an asset pipeline of dependencies which allows for a more dynamic and modern experience. With this app, the user can enter a medical ailment into the search bar and get a list of doctors from [Better Doctor.com](http://betterdoctor.com/) available to help with their issue.


&nbsp;
## Planning

#### Basic UI
* the user is able to enter an ailment (ex. toothache) into a form on the home page. Based on their input, a list of doctors who are appropriately skilled to handle such an ailment are displayed on the page. The doctor's contact information is also displayed.

#### Initial Files and Dependencies
* write README
* initialize git, add repository
* **Initial Files**
  * add gulpfile.js, .gitignore, .env, index.html, scss/styles.scss, js/doctor.js, js/doctor-interface.js
* **NPM**
  * initialize npm
  * install (--save-dev), require and write tasks in gulpfile for the following dependencies:
    * gulp (_automator_)
    * gulp-concat (_concats into one file_)
    * browserify and vinyl-source-stream (_after concat, interprets exports/requires, prepares for browser_)
    * gulp-uglify (_after browserify and V-S-S, minifies_)
    * del (_clears build and tmp folders before new builds_)
    * gulp-util (_after del, allows for dev and production builds_)
    * require utilities.env.production (_helps create production build_)
    * jshint & gulp-jshint (_linter_)
    * bower-files (_allows for concat of bower dependencies_)
    * browser-sync (_allows for dev server_)
    * add watchers to server task for js, bower and scss builds
    * gulp-sass (_CSS preprocessor_)
    * gulp-sourcemaps (_allows SCSS to be read as CSS by browser_)
* **Bower**
  * install bower via npm
  * initialize bower
  * install (--save) jquery, bootstrap
  * add bootstrap override to bower-files require
  * add tasks to concat bowerJS and bowerCSS files and add new task to call those two together
* add script and link tags to index head for .js and css builds
* add the following to .gitignore - .env, node_modules/, bower_components/, build/, tmp/
* test jquery & css

#### Populate Files
* write form in index.html
* take form input in doctor-interface.js
* add exports/require to doctor/doctor-interface js files

#### Implement Api
* get key from Better Doctors and add to .evi file
* **in doctor.js**
* employ variables in URL
* parse JSON data
* implement callback functions

#### Style
* choose font
* set media page sizes

#### Refactor
  * try to break site
  * check dryness of code
  * delete console.logs
  * check spacing
  * doublecheck README for setup instructions and other information


&nbsp;
## Setup/Installation Requirements
##### _To view and use this application:_
* It is necessary to download and install the package managers [npm](https://www.npmjs.com) and [bower](https://bower.io/) to use this application
* You must also request your own API key from [Better Doctor](https://developer.betterdoctor.com).
* Go to my [Github repository](https://github.com/Brendangrubb/doctor-lookup)
* Download the zip file via the green button and unzip the file
* Open Terminal and navigate to **_doctor-lookup-master_** project folder
* Open the project folder in your text editor and create a file called .env
  * Type the following text at the top of the file:
    * exports.apiKey = _"YOUR API KEY HERE"_;
* Type the following commands in Terminal:
  * npm install
  * bower install
  * gulp build --production
  * gulp serve
* The application will load in your browser and be ready to use!

&nbsp;
## Known Bugs
* No known bugs

&nbsp;
## Technologies Used
* AJAX
* Node and npm
* Bower
* Gulp
* Sass
* CSS
* Bootstrap
* HTML

&nbsp;
_If you have any questions or comments about this program, you can contact me at [brendangrubb@gmail.com](mailto:brendangrubb@gmail.com)._

Copyright (c) 2017 Brendan Grubb

This software is licensed under the GPL license
