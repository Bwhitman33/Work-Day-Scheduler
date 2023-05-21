$(document).ready(function () {

    var todayDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').html(todayDate);

    $('.saveBtn').on('click', function() {
      console.log(this);
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
    })

function timeSchedule() {
    var timeNow = dayjs().get('hour');
   
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(timeBlock, timeNow)

        if (timeBlock < timeNow) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (timeBlock === timeNow) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}

    timeSchedule();

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});
