document.addEventListener("DOMContentLoaded", function () {
  const daysMap = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wendsday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  };

  const todayId = daysMap[new Date().getDay()];
  const todayRow = document.getElementById(todayId);

  if (todayRow) {
    todayRow.classList.add("today");
  }
});