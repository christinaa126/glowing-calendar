var date = "Today's Date is: " + moment().format("MMMM Do YYYY");
$("#currentDay").html(date);


$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
   

   
    var currentTime= moment().hour();

    var timeBlockEl = $('.time-block')

    for (var i = 0; i< timeBlockEl.length; i++) {
        
        if (timeBlockEl[i].id.slice(-2) < currentTime){
            timeBlockEl.addClass('past')
        } else if (timeBlockEl[i].id.slice(-2) === currentTime){
            timeBlockEl.addClass('present')
        }
         else {
             timeBlockEl.addClass('future')
         }
    }


    
    $("#hour-09 .description").val(localStorage.getItem("hour-09"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
   
})