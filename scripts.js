var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");


currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var currHour = moment().hour();
    //var currHour = 12;

    textBoxEl.each(function (index, element) {
        element = $(element);
        if (currHour > element.attr("data-time")) {
            element.addClass("past").removeClass("future");
        } else if (currHour == element.attr("data-time")) {
            element.addClass("present").removeClass("future");
        }
    });
}
setInterval(update, 1000);





localStorage 
$("button").on("click", function (event) {
    // alert("Button Clicked!");
    event.preventDefault();
    var input = $("input").val();
    console.log(input);
    localStorage.setItem("input", JSON.stringify(input));
});

// To clear use localStorage.clear()
