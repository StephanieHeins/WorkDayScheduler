// Current time display 
var today = moment();
$("#currentdate").text(today.format("MMM Do, YYYY"));

// Click to Save & store in LocalStorage
$(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // Load data from LocalStorage 
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour13"));
$("#hour2 .description").val(localStorage.getItem("hour14"));
$("#hour3 .description").val(localStorage.getItem("hour15"));
$("#hour4 .description").val(localStorage.getItem("hour16"));
$("#hour5 .description").val(localStorage.getItem("hour17"));

// Change color of blocks depending on time
function hourTracker() {
    var currentTime = moment().hour();

    $(".timeblock").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentTime)

        if (blockHour < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
    hourTracker();

})