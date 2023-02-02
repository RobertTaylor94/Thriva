//document selectors
let bubbleOne = $("#bubble-one");
let bubbleTwo = $("#bubble-two");
let bubbleThree = $("#bubble-three");

function loadQuote() {
    bubbleOne.delay(500).fadeIn();
    bubbleTwo.delay(1000).fadeIn();
    bubbleThree.delay(1500).fadeIn();
}

loadQuote();