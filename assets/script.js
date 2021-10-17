// Current time display 
var today = moment();
$("#currentdate").text(today.format("MMM Do, YYYY"));

// Click to Save & store in LocalStorage


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

// Load data from LocalStorage 