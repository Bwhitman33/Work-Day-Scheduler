$(document).ready(function () {

    var todayDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').html(todayDate);

    $('.saveBtn').on('click', function() {
      console.log(this);
      var text = $(this).siblings("description").val();
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

    


});
