function searchCity(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
}
function handlesubmit(event) {
  event.preventDefault();
  let searchinputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchinputElement.value;
  searchCity(searchinputElement.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handlesubmit);
