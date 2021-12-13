// TIME 
let update = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(update, 1000);
  
  $(document).ready(function () {
    let timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let currentHour = moment().hour()
    console.log(currentHour)
    function renderPlans() {
      for (let i = 0; i <= timeSlots.length; i++) {
        $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));

        // CHANGE COLORS DEPENDING ON HOUR
        if (timeSlots[i] < currentHour ){
          $("#" + timeSlots[i]). addClass("past")
        } else if (timeSlots[i] === currentHour){
          $("#" + timeSlots[i]). addClass("present")
        } else {$("#" + timeSlots[i]). addClass("future")}
      }
    }
    renderPlans();
    // SAVE BUTTON
    $(".saveBtn").click(function () {
      let dataHour = $(this).attr("data-hour");
      let inputField = $("#" + dataHour).val();
  
      localStorage.setItem(dataHour, inputField);
      console.log(inputField);
    });
    // CLEAR BUTTON
    $(".clearBtn").click(function () {
      let dataHour = $(this).attr("data-hour");
        $("#" + dataHour).val("");
        localStorage.setItem(dataHour, "");
      });


  });
  

