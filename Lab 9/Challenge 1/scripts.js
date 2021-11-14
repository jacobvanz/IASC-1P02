var start = new Date();

function stopTime() {
var stop = new Date();
var timePassed = stop.getTime() - start.getTime();
var secondsPassed = timePassed / 600;
alert("You have been on the page for: " + secondsPassed + " seconds");
}
