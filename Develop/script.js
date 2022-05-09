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
        console.log(blockTime, timeNow);
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
