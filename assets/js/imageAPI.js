//-------------------------------Global variables, access keys and URL for unsplash------------------------

var accessKey = "TqBGDvaMYR250RKKC0Z2i2R54L2QR-dDK0-wnKwmObI"
var queryURL = "https://api.unsplash.com/photos/random?client_id=" + accessKey + "&count=1&orientation=landscape&query=nature";
var backgroundEl = $("#background-image");
var localPicture = localStorage.getItem("localImage");

var dateLastVist //= new Date("01/01/2023") ///-------date to make sure local storage isnt empty first run--------------------
var choice 
var localStorageDate // = localStorage.getItem("lastVist")
var dateNow
var days


//-------------------------- varible for testing dates - turn off for real dates!!!!--------------------------------------------

  dateLastVist = new Date("02/02/2023") // add for test times
  localStorage.setItem("lastVist",dateLastVist) // add for test times 


//--------------------function to call API for a new image (if last visit to page is over 24 hours)-------------
function callImageAPI(){
//basic juery api call
  $.ajax({
    url: queryURL, // unsplash API call 
    method: "GET"
  })// capture response from api call \
  .then(function(response) {
    console.log(response)
   console.log(response[0].urls.small)
   var randomImage = response[0].urls.regular //capture random image from response in regular size 
   localStorage.setItem("localImage",randomImage)// set the picture in local store to the new picture
   localPicture = localStorage.getItem("localImage") //get picture from local storage and save to varible 
  console.log("random image url is: " + randomImage)

  backgroundEl.css("background-image", `url(${randomImage})`);//change the picure on the page to the new image 

dateNow = new Date() // detting the now date to current date - to update the last page visit 
// console.log("Date now is " + dateNow)
localStorage.setItem("lastVist",dateNow)

  })

}

// ----------Function to determine whether to user stored picture or request a new picture - if last visit was over a day ago --------

function localOrNew (){

    dateNow = new Date()// Get Current Date
    console.log("Date now is " + dateNow)
    localStorageDate = localStorage.getItem("lastVist")// get Last visit time from local storage 
    console.log( "the date from local storage is " + localStorageDate)
    var dateConvert = new Date(localStorageDate)// convert local storage date 
    console.log("date converted is " + dateConvert)
    var diff =  dateNow.getTime() - dateConvert.getTime() //work out difference between time now and time last visited 
    console.log("time difference is " + diff + "milliseconds")
    days = diff/86400000 // covert time last visted to days
    console.log(" the difference in days is " + days)
    choice = days // capture days in choice 
    console.log("choice is " + choice)

    if(choice >=1){
        console.log("Time is greater than 1 day - calling for a new image")
    callImageAPI()
    }else{
        console.log("Time is less than 1 day - loading image from local storage")
  backgroundEl.css("background-image", `url(${localPicture})`)
    } }

// //-----------------Call localOrNew-------------------
localOrNew()
// //------------------------
