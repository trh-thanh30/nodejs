const weatherForm = document.querySelector("form");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
weatherForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = document.querySelector("input").value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch("http://localhost:3000/weather?address=" + search).then(
    async (response) => {
      const data = await response.json();
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.textContent = "";
        return false;
      } else {
        messageOne.textContent = "Location: " + data.location;
        messageTwo.textContent =
          "Weather descriptions: " +
          data.weather_descriptions +
          ", Temperature: " +
          data.temperature +
          ", Wind speed: " +
          data.wind_speed +
          ", Wind degree: " +
          data.wind_degree;
      }
    }
  );
});
