// This code uses jQuery to fetch a random quote from the URL https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=? and display it in the HTML elements with the IDs 'quote' and 'author' 

$(document).ready(function () {
    
    var quoteURL =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    var quoteContainer = $("#quote");
    var authorContainer = $("#author");
  
    function displayQuote(data) {
      quoteContainer.fadeOut(function () {
        $(this).text(data.quoteText).fadeIn();
      });

      authorContainer.fadeOut(function () {
        var author = data.quoteAuthor ? data.quoteAuthor : "Unknown";
        $(this).text(author).fadeIn();
      });
    }

  // The 'handleError' function is used to log any errors that occur during the request 
    function handleError(textStatus, errorThrown) {
      console.warn(textStatus + "\n" + errorThrown);
    }
  
  // The 'getQuote' function is called when the page loads
    function getQuote() {
         // The code uses the '$.getJSON' method to make a request to the API and pass the resulting data to the 'displayQuote' function.
      $.getJSON(quoteURL, displayQuote).fail(handleError);
    }
  
    getQuote();
  });
  