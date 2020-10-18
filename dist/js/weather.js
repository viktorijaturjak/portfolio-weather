const apiKey = '867d7534170e764a8a08cf5c696b9e72';
const exclude = 'minutely,hourly';
const units = 'metric';

function defaultWeather() {
    console.log('DEFAULT');
    const geolocation = getLatLong('zagreb');
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${geolocation['lat']}&lon=${geolocation['long']}&exclude=${exclude}&appid=${apiKey}&units=${units}`;
    makeRequest(URL, 'zagreb');
}
defaultWeather();


function refreshWeather() {
    console.log('REFRESH');
    const inputCity = document.getElementById('input-city');
    const strCity = inputCity.options[inputCity.selectedIndex].value;
    console.log(strCity);
    const geolocation = getLatLong(strCity);
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${geolocation['lat']}&lon=${geolocation['long']}&exclude=${exclude}&appid=${apiKey}&units=${units}`;
    makeRequest(URL, strCity)
}

function makeRequest(url, city) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const response = request.response;
        const resCurrent = response['current'];
        const resDaily = response['daily'];
        handleCurrent(resCurrent, city);
        handleDaily(resDaily);
    }
}


function handleCurrent(data, city) {
    document.getElementById('current-weather').innerHTML = `
        <div class="heading-box">
            <p class="name">${capitalizeFirstLetter(city)}</p>
            <p class="temperature">${data['temp']} &#8451;</p>
            <p class="feeling">Feels like: ${data['feels_like']} &#8451;</p>
        </div>
        <div class="content-box">
            <p>Sunrise: ${timestampToTime(data['sunrise'])}</p>
            <p>Sunset: ${timestampToTime(data['sunset'])}</p>
            <p>Pressure: ${data['pressure']} hPa</p>
            <p>UV Indeks: ${data['uvi']}</p>
            <p>Visibility: ${metersToKilometers(data['visibility'])} km</p>
            <p>Wind Speed: ${data['wind_speed']} m/s</p>
        </div>
    `;
} 

function handleDaily(data) {
    const container = document.getElementById('daily-forcast');
    container.innerHTML = '';
    for (let i = 1; i < data.length; i++) {
        let weatherCondition = data[i]['weather'][0]['main'];
        let weatherIcon = getWeatherIcon(weatherCondition);
        let box = document.createElement('div');
        box.className = 'icon-flex';
        box.innerHTML = `
            ${weatherIcon}
            <div class="icon-content">
                <p class="white"><span>${timestampToDayOfWeek(data[i]['dt'])},${'<br>' + timestampToDate(data[i]['dt'])}</span><br>
                ${data[i]['temp']['day']} &#8451; - ${weatherCondition}<br>
                Min: ${data[i]['temp']['min']} &#8451;<br>
                Max: ${data[i]['temp']['max']} &#8451;<br>
                Pressure: ${data[i]['pressure']} hPa<br>
                Humidity: ${data[i]['humidity']}%<br>
                Wind Speed: ${data[i]['wind_speed']} m/s</p>
            </div>
        `;

        container.appendChild(box);
    }
    
}