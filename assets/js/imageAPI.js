var queryURL = "https://api.unsplash.com/photos/random?client_id=" + accessKey + "&count=1&orientation=landscape&query=nature";
var backgroundEl = $("#background-image");

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(response)
   console.log(response[0].urls.small)
   var randomImage = response[0].urls.regular
  console.log("random image url is: " + randomImage)
  var newImg = document.createElement("img")
  newImg.setAttribute("src",randomImage)
  console.log("newImg is " + newImg)

  backgroundEl.css("background-image", `url(${randomImage})`)

  })