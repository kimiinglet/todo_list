var currentDayEl = $("#currentDay");
currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);