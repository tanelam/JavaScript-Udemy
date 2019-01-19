class Weather {
  constructor(city, state){
    this.apiKey = "b8e9c3dbc11bba04";
    this.city = city;
    this.state = state ;
  }

  //fetch weather from api
  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city }.json`);

    const responseData = await response.json()

    return responseData.current_observation;
  }

  //change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}
