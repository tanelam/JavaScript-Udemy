//init storage class
const storage = new Storage();

//get stored location data
const weatherLocation = storage.getLocationData();

//init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//init new ui
const ui = new UI();

// weather.changeLocation("Miami", "FL")

//get weather on dom load
document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("w-change-btn").addEventListener("click", (event) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  //set location in LS
  storage.setLocationData(city, state); 

  //get and display weather
  getWeather();

  //close the modal
  $('#locModal').modal('hide')
})

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))
}
