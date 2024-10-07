(function () {
  var timeElement = document.getElementById("time");
  function updateTime(time) {
    time.innerHTML = new Date().toLocaleTimeString(["en-SE"], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  updateTime(timeElement);
  setInterval(function () {
    updateTime(timeElement);
  }, 1000); /* update every second */
})();

(function () {
  var dateElement = document.getElementById("date");
  function updateDate(date) {
    date.innerHTML = new Date().toLocaleDateString(["en-SE"], {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }
  updateDate(dateElement);
  setInterval(function () {
    updateDate(dateElement);
  }, 3600000); /* update every hour */
})();
