var start = new Date();

function stopTime() {
var stop = new Date();
var timePassed = stop.getTime() - start.getTime();
var secondsPassed = timePassed / 600;
alert(secondsPassed);
}
