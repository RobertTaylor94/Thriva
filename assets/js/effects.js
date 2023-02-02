//document selectors
let bubbleOne = $("#bubble-one");
let bubbleTwo = $("#bubble-two");
let bubbleThree = $("#bubble-three");
let speechBubble= $(".speech-bubble");

function loadQuote() {
    bubbleOne.delay(500).fadeIn();
    bubbleTwo.delay(1000).fadeIn();
    bubbleThree.delay(1500).fadeIn();
    speechBubble.delay(2000).fadeIn();
}

loadQuote();