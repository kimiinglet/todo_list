var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");

var desc1El =$("#desc09");


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

//function to retrieve stored user data
renderUserInput();
function renderUserInput() {
    var userDesc1 = localStorage.getItem("desc09");
    $("#desc09").val(JSON.parse(userDesc1));
    console.log(userDesc1);
    if(userDesc1 === null){
        return;
    }
    desc1El.textContent = userDesc1;
}
// event listener to store user input upon click of Save button
saveBtnEl.on("click", function (event) {
    event.preventDefault();
    var input = $("#desc09").val();
    localStorage.setItem("desc09", JSON.stringify(input));
    renderUserInput();
});


saveBtnEl.on("click", function(event) {
    event.preventDefault();
    var input = $()
})



localStorage 
$("button").on("click", function (event) {
    // alert("Button Clicked!");
    event.preventDefault();
    var input = $("input").val();
    console.log(input);
    localStorage.setItem("input", JSON.stringify(input));
    localStorage.clear();
});

//To clear use localStorage.clear()
