var date = "Today's Date is: " + moment().format("MMMM Do YYYY");
$("#currentDay").html(date);


$(document).ready(function bird() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
    function theTime() {
        var currentTime = moment().hour();
        $(".time-block").each(function () {
            var hour = parseInt($(".time-block").attr("id").split("currentTime")[1]);

            if (hour < currentTime) {
                $(".time-block").addClass("past");
            }
            else if (hour === currentTime) {
                $(".time-block").addClass("present");
            }
            else {
                $(".time-block").addClass("future");
            }
        })
    }
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    theTime();
})