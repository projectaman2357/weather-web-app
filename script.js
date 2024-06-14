const apiKey = 'YOUR_API_KEY';
const city = 'London';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
.then(data => {
    console.log('Weather data for', data.name);
    console.log('Temperature:', data.main.temp, '°C');
    console.log('Humidity:', data.main.humidity, '%');
    console.log('Wind speed:', data.wind.speed, 'm/s');
  })
.catch(error => {
    console.error('Error fetching weather data:', error);
  });