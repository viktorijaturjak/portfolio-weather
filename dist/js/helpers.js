function getLatLong(city) {
    switch(city) {
        case 'zagreb':
            return {'lat': 45.815399, 'long': 15.966568};
        case 'osijek':
            return {'lat': 45.560848, 'long': 18.675964};
        case 'split':
            return {'lat': 43.508133, 'long': 16.440193};
        case 'rijeka':
            return {'lat': 45.328979, 'long': 14.457664};
        default:
            return {'lat': 45.815399, 'long': 15.966568};
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function metersToKilometers(meters) {
    return meters / 1000;
}


function timestampToTime(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = '0' + date.getHours();
    let minutes = '0' + date.getMinutes();
    let seconds = '0' + date.getSeconds();
    return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}


function timestampToDayOfWeek(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}


function timestampToDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let year = date.getFullYear();
    let month = '0' + date.getMonth();
    let day = '0' + date.getDay();
    return year + '/' + month.substr(-2) + '/' + day.substr(-2);
}


function getWeatherIcon(weatherCondition) {
    switch (weatherCondition) {
        case 'Thunderstorm':
            return `
                <div class="icon thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                        <div class="bolt"></div>
                        <div class="bolt"></div>
                    </div>
                </div>`;
        case 'Drizzle':
            return `
                <div class="icon sun-shower">
                    <div class="cloud"></div>
                    <div class="sun">
                        <div class="rays"></div>
                    </div>
                    <div class="rain"></div>
                </div>`;
        case 'Rain':
            return `
                <div class="icon rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>`;
        case 'Snow':
            return `
                <div class="icon flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                        <div class="flake"></div>
                        <div class="flake"></div>
                    </div>
                </div>`;
        case 'Clear':
            return `
                <div class="icon sunny">
                    <div class="sun">
                        <div class="rays"></div>
                    </div>
                </div>`;
        case 'Clouds':
            return `
                <div class="icon cloudy">
                    <div class="cloud"></div>
                    <div class="cloud"></div>
                </div>`;
        default:
            return `
                <div class="icon sunny">
                    <div class="sun">
                        <div class="rays"></div>
                    </div>
                </div>`;
    }
}