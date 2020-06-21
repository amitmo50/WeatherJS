class Weather {
  constructor(city, country){
    this.apiKey = 'b531155a4b3b909bd3ac48fc7da48099';
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);
    const responseData = response.json();
    console.log(responseData);

    return responseData;
  }
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}