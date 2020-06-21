const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
//getWeather();
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  console.log(city);
  console.log(country);
  weather.changeLocation(city, country);

  storage.setLocation(city, country);

  getWeather();

  $('#locModal').modal('hide');
})
function getWeather() {
  weather.getWeather().then(result => ui.paint(result))
  .catch(err => console.log(err));
}

