(function () {
  fetch("https://ipwho.is")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("ip-address").textContent =
        data.ip + ", " + data.city + ", " + data.country;
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
})();
