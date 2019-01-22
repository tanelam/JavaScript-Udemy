//init weather class
const weather = new Weather("Boston", "MA");

//init new ui
const ui = new UI();

// weather.changeLocation("Miami", "FL")

//get weather on dom load
document.addEventListener("DOMContentLoaded", getWeather)

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))
}
