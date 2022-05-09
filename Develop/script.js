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
