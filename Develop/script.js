var currentDate = moment().format('dddd, MMM Do YYYY');
var currentTime = moment().hour();
$("#currentDate").html(currentDate);

// function for the save btn and variables
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var item = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saving items via local storage
        localStorage.setItem(time, item);
    })

     // time block function for past, future, and present items

     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, currentTime);
        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
    }
})

// local storage saves

$("#eightAM .description").val(localStorage.getItem("eightAM"));
$("#nineAM .description").val(localStorage.getItem("nineAM"));
$("#tenAM .description").val(localStorage.getItem("tenAM"));
$("#elevenAM .description").val(localStorage.getItem("elevenAM"));
$("#twelvePM .description").val(localStorage.getItem("twelvePM"));
$("#onePM .description").val(localStorage.getItem("onePM"));
$("#twoPM .description").val(localStorage.getItem("twoPM"));
$("#threePM .description").val(localStorage.getItem("threePM"));
$("#fourPM .description").val(localStorage.getItem("fourPM"));
$("#fivePM .description").val(localStorage.getItem("fivePM"));
})
